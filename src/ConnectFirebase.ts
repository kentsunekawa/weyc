import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import * as Types from './Types'

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

class ConnectFirebase {
  private firebaseConfig: FirebaseConfig;
  private googleAuthProvider;
  private db;
  private userDocumentRef;
  private todosCollectionRef;
  constructor(firebaseConfig) {
    this.firebaseConfig = firebaseConfig;
    this.googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.initializeApp(this.firebaseConfig);
    this.db = firebase.firestore();
  }

  onAuthStateChanged() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.userDocumentRef = this.db.collection('users').doc(user.uid);
          this.todosCollectionRef = this.userDocumentRef.collection('todos');
          resolve(user);
        } else {
          reject();
        }
      });
    });
  }

  getUser() {
    return firebase.auth().currentUser;
  }

  login() {
    firebase.auth().signInWithRedirect(this.googleAuthProvider);
  }

  getRedirectResult(thenFunc, catchFunc) {
    firebase.auth().getRedirectResult()
      .then((result) => {
        thenFunc(result);
      })
      .catch((error) => {
        catchFunc(error);
      });
  }

  logout() {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut()
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  requestTodosData() {
    let todosData: any = [];
    return new Promise((resole, reject) => {
      this.todosCollectionRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          todosData.push({
            id: doc.id,
            ...doc.data()
          });
        });
        resole(todosData);
      })
        .catch((error) => {
          reject(error);
        });
    });
  }

  addTodo(todoData) {
    return new Promise((resolve, reject) => {
      delete todoData.id;
      this.todosCollectionRef.add(todoData)
        .then((docRef) => {
          resolve(docRef);
        });
    });
  }

  deleteTodo(id) {
    return new Promise((resolve, reject) => {
      this.todosCollectionRef.doc(id).delete()
        .then(() => {
          resolve('success');
        })
        .catch((error) => {
          reject();
        });
    });
  }

  updateTodo(todoData) {
    const id = todoData.id;
    delete todoData.id;
    return new Promise((resolve, reject) => {
      this.todosCollectionRef.doc(id).set({
        ...todoData
      })
        .then((result) => {
          resolve(result);
        });
    });
  }
}

export default ConnectFirebase;