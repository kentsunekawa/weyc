export interface RootState {
  app: AppState;
  todo: TodoState;
  user: UserState;
};

export interface AppState {
  isLoading: boolean;
};

export interface TodoState {
  isLoaded: false;
  maxDisplayNum: number;
  queryData: QueryData;
  todos: [] | Array<Todo>;
}

export interface User {
  displayName: string;
  uid: string;
}


export interface UserState {
  user: null | User;
  isLoading: boolean;
}


export interface Todo {
  id: string;
  limit: string;
  name: string;
  isDone: boolean;
}

export interface QueryData {
  sortKey: SortKey;
  start: string;
  end: string;
  keyword: string;
  isShowDoneTodo: boolean;
}

export type SortKey = 'asc' | 'desc';