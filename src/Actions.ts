import * as Types from './Types';
import * as ActionTypes from './ActionTypes';
import { FireBase } from './UserReducer';

export const login = () => {
  return () => {
    FireBase.login();
  };
}

export const checkIsLogin = () => {
  return (dispatch) => {
    FireBase.onAuthStateChanged()
      .then((result: any) => {
        dispatch(setUser({
          displayName: result.displayName,
          uid: result.uid
        }));
      })
      .catch(() => {
        dispatch(changeLoadingStatus(false));
      });
  }
}

export const changeLoadingStatus = (isLoading: boolean) => ({
  type: ActionTypes.ChangeLoadingStatus,
  isLoading,
});

export const setUser = (userInfo: Types.User | null) => ({
  type: ActionTypes.SetUser,
  userInfo,
});

export const logout = () => {
  return (dispatch) => {
    FireBase.logout()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        // window.alert(error)
      });
  }
}

export const requestTodosData = () => {
  return (dispatch, getState) => {
    console.log('requestTodosData');

    FireBase.requestTodosData()
      .then((data: any) => {
        dispatch(changeLoadingStatus(false));
        dispatch(setTodos(data));
        dispatch(changeIsLoaded());
      })
      .catch((error) => {

      });
  };
}

export const changeIsLoaded = () => ({
  type: ActionTypes.ChangeIsLoaded
});

export const setTodos = (todos: Types.Todo[]) => ({
  type: ActionTypes.SetTodos,
  todos
});

export const deleteTodo = (id: string) => {
  return (dispatch) => {
    FireBase.deleteTodo(id)
      .then(() => {
        dispatch(requestTodosData());
      });
  }
};

export const addTodo = (todoData: Types.Todo) => {
  return (dispatch) => {
    FireBase.addTodo(todoData)
      .then(() => {
        dispatch(requestTodosData());
      });
  }
};

export const updateTodo = (todoData: Types.Todo) => {
  return (dispatch) => {
    dispatch(changeLoadingStatus(true));
    FireBase.updateTodo(todoData)
      .then(() => {
        dispatch(requestTodosData());
      });
  }
}

export const setQueryData = (queryData: Types.QueryData) => ({
  type: ActionTypes.SetQueryData,
  queryData,
});

export const setSortKey = (sortKey: Types.SortKey) => ({
  type: ActionTypes.SetSortKey,
  sortKey,
});

export const setMaxDisplayNum = (num: number) => ({
  type: ActionTypes.SetMaxDisplayNum,
  num
});