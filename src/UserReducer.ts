import * as Types from './Types';
import * as ActionTypes from './ActionTypes';
import * as Actions from './Actions';
import ConnectFirebase from './ConnectFirebase';

const firebaseConfig = {
  apiKey: "AIzaSyDaZ5sHf04QcRjOG_-0K3gso23T_npEbq8",
  authDomain: "weyc-25e76.firebaseapp.com",
  projectId: "weyc-25e76",
  storageBucket: "weyc-25e76.appspot.com",
  messagingSenderId: "98811905058",
  appId: "1:98811905058:web:d1b0c3821913810d8ff67b",
  measurementId: "G-15KP31M489"
};

export const FireBase = new ConnectFirebase(firebaseConfig);

const initState = {
  user: null,
  isLoading: true,
}

type ActionsType = ReturnType<typeof Actions.setUser | typeof Actions.changeLoadingStatus>;

const UserReducder = (state: Types.UserState = initState, action: ActionsType) => {
  switch (action.type) {
    case ActionTypes.SetUser:
      return {
        ...state,
        user: action.userInfo
      };
    case ActionTypes.ChangeLoadingStatus:
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state;
  }
}

export default UserReducder;