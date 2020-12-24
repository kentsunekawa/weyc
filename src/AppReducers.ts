import * as Types from './Types';
import * as ActionTypes from './ActionTypes';
import * as Actions from './Actions';

const initialState: Types.AppState = {
  isLoading: true,
}

type ActionTypes = ReturnType<
  typeof Actions.changeLoadingStatus
>

const AppReducer = (state: Types.AppState = initialState, action: ActionTypes) => {
  switch (action.type) {
    case ActionTypes.ChangeLoadingStatus:
      return {
        ...state,
        isLoading: action.isLoading
      }
    default:
      return state;
  }
}

export default AppReducer;