import {AppActions, AppStateInterface} from '../interfaces';
import {ActionTypes} from '../actionTypes';
import {initialAppState} from '../reduxConfig';

export function projectReducer(state: AppStateInterface = initialAppState, action: AppActions): AppStateInterface {
  switch (action.type) {
    case ActionTypes.SET_SELECTED_PROJECT: return { ...state, selectedProject: action.payload };
    default: return state;
  }
}
