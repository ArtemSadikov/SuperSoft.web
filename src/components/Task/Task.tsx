import React, {CSSProperties, useCallback, useMemo} from 'react';
import './Task.css';
import {ITask} from '../../utils';

interface Props {
  task: ITask;
  onDragStart: (task: number) => void;
  onDrop: (task: number) => void;
}

export const Task = (props: Props) => {
  const {task, onDragStart, onDrop} = props;
  const {title, whenStarted, user, status} = task;

  const statusStyle = useMemo<CSSProperties>(() => {
    let backgroundColor;

    switch (status) {
      case 'new':
        backgroundColor = '#2ED47A';
        break;
      case 'markdown':
        backgroundColor = '#FFB946';
        break;
      case 'expire':
        backgroundColor = '#F7685B';
        break;
    }
    return {backgroundColor};
  }, [status]);

  const handleOnDragStart = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    onDragStart(task.id);
  }, [onDragStart, task]);
  const handleOnDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    // @ts-ignore
    if (event.target.className === 'task-container') {
      // @ts-ignore
      event.target.style.boxShadow = '0 4px 16px -4px rgba(0, 0, 0, 0.85)';
    }
  }, []);
  const handleOnDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    // @ts-ignore
    if (event.target.className === 'task-container') {
      //@ts-ignore
      event.target.style.boxShadow = '0 4px 16px -4px rgba(0, 0, 0, 0.25)';
    }
  }, []);
  const handleOnDragEnd = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    // @ts-ignore
    if (event.target.className === 'task-container') {
      //@ts-ignore
      event.target.style.boxShadow = '0 4px 16px -4px rgba(0, 0, 0, 0.25)';
    }
  }, []);
  const handleOnDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    onDrop(task.id);
    //@ts-ignore
    if (event.target.className === 'task-container') {
      //@ts-ignore
      event.target.style.boxShadow = '0 4px 16px -4px rgba(0, 0, 0, 0.25)';
    }
  }, [onDrop, task]);

  return (
    <div
      onDragStart={handleOnDragStart}
      onDragOver={handleOnDragOver}
      onDragLeave={handleOnDragLeave}
      onDragEnd={handleOnDragEnd}
      onDrop={handleOnDrop}
      draggable={true}
      id={String(task.id)}
      className="task-container">
      <div className="task-status-wrapper"
           style={statusStyle}/>
      <div className="task-content-container">
        <div className="task-top-content-container">
          <text className="task-title-text">{title}</text>
          <text className="task-title-started-text">Opened: {whenStarted.toDateString()}</text>
        </div>
        <div className="task-user-container">
          <img src={user.image}
               alt={'mmm'}
               className="task-user-image"/>
          <text className="task-user-name-text">{user.name}</text>
        </div>
      </div>
    </div>
  );
};
