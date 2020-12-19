import {useDispatch, useSelector} from 'react-redux';
import {useCallback} from 'react';
import {ActionTypes} from '../actionTypes';
import {AppProjectState} from '../interfaces';

const useSetProject = () => {
  const dispatch = useDispatch();
  return useCallback(
    (project: number) => {
      dispatch({
        type: ActionTypes.SET_SELECTED_PROJECT,
        payload: project,
      });
    },
    [dispatch],
  );
};

export const useProject = () => {
  const project = useSelector((state: AppProjectState) => state.projectReducer.selectedProject);
  const setSelectedProject = useSetProject();
  const setProject = useCallback(
    (projectId: number) => setSelectedProject(projectId),
    [setSelectedProject],
  );
  return { project, setProject };
};
