import {ActionTypes} from './actionTypes';

export interface AppProjectStateInterface {
  selectedProject: number;
}

export interface AppProjectState {
  projectReducer: AppProjectStateInterface
}

export interface AppStateInterface extends AppProjectStateInterface {}

export interface AppActions {
  type: ActionTypes
  payload: any
}
