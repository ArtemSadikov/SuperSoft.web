import React, {useCallback} from 'react';
import './TaskBoard.css';
import {ITask} from '../../utils';
import {Task} from '../Task/Task';

interface Props {
  tasks: ITask[];
  title: string;
  onDragTaskStart: (taskId: number, boardId: number) => void;
  boardId: number;
  onDrop: (taskId: number, boardId: number) => void;
}

export const TaskBoard = (props: Props) => {
  const {tasks, title, onDragTaskStart, boardId, onDrop} = props;

  const handleOnDragStart = useCallback((taskId: number) => {
    onDragTaskStart(taskId, boardId);
  }, [boardId, onDragTaskStart]);

  const handleOnDrop = useCallback((taskId: number) => {
    onDrop(taskId, boardId);
  }, [boardId, onDrop]);

  const renderTask = useCallback((task: ITask) => {
    return (
      <Task
        task={task}
        onDragStart={handleOnDragStart}
        onDrop={handleOnDrop}
      />
    );
  }, [handleOnDragStart, handleOnDrop]);

  return (
    <div className="tasksBoard-container">
      <div className="tasksBoard-title-container">
        <text className="tasksBoard-title-text">{title}</text>
        <text className="tasksBoard-title-tasks-count">{tasks.length}</text>
      </div>
      <div className="tasksBoard-tasks-container">
        {tasks.length > 0 && tasks.map(renderTask)}
      </div>
    </div>
  );
};
