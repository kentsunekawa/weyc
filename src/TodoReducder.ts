import * as Types from './Types';
import * as ActionTypes from './ActionTypes';
import * as Actions from './Actions';

const initState: Types.TodoState = {
  isLoaded: false,
  maxDisplayNum: 10,
  queryData: {
    sortKey: 'asc',
    start: '',
    end: '',
    keyword: '',
    isShowDoneTodo: true,
  },
  todos: []
};

type ActionsType = ReturnType<
  typeof Actions.changeIsLoaded |
  typeof Actions.setQueryData |
  typeof Actions.setSortKey |
  typeof Actions.setMaxDisplayNum |
  typeof Actions.setTodos
>

const TodoReducer = (state: Types.TodoState = initState, action: ActionsType) => {
  switch (action.type) {
    case ActionTypes.ChangeIsLoaded:
      return Object.assign({}, state, { isLoaded: true });
    case ActionTypes.SetTodos:
      return {
        ...state,
        todos: action.todos
      };
    case ActionTypes.SetQueryData:
      console.log(action.queryData);
      return {
        ...state,
        queryData: action.queryData
      };
    case ActionTypes.SetSortKey:
      let newQueryData = Object.assign({}, {
        ...state.queryData,
        sortKey: action.sortKey
      });
      return {
        ...state,
        queryData: newQueryData
      };
    case ActionTypes.SetMaxDisplayNum:
      return {
        ...state,
        maxDisplayNum: action.num
      }
    default:
      return state;
  }
}

export default TodoReducer;