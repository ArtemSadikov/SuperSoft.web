import React, {useCallback, useEffect, useRef, useState} from 'react';
import {PageContainer, TaskBoard} from '../../components';
import avatar from '../../assets/images/logo192.png';
import './Tasks.css';
import {BOARDS, FAKE_TASKS, FAKE_TASKS_1, FAKE_TASKS_2, IBoard, ITask} from '../../utils';

const FILTER_OPTIONS: string[] = ['All', 'New', 'Markdown', 'Expire'];

export const Tasks = () => {
  const [boards, setBoards] = useState<IBoard[]>(BOARDS);
  const cachedTasks = useRef<ITask[]>(FAKE_TASKS.concat(FAKE_TASKS_1).concat(FAKE_TASKS_2)).current;
  const [tasks, setTasks] = useState<ITask[]>(cachedTasks);
  const [currentBoard, setCurrentBoard] = useState<IBoard>();
  const [currentTask, setCurrentTask] = useState<ITask>();
  const [filterOption, setFilterOption] = useState(FILTER_OPTIONS[0]);

  const handleOnAddProjectPress = useCallback(() => {
  }, []);

  useEffect(() => {
    if (filterOption.toLowerCase() !== "all") {
      setTasks(cachedTasks.filter((task) => task.status === filterOption.toLowerCase()));
    } else {
      setTasks(cachedTasks);
    }
  }, [filterOption]);

  const handleOnDragTaskStart = useCallback((taskId: number, boardId: number) => {
    const board = boards.find((board) => board.boardId === boardId);
    const task = tasks.find((tsk) => tsk.id === taskId);
    if (board) {
      setCurrentBoard(board);
    }

    if (task) {
      setCurrentTask(task);
    }
  }, [boards, tasks]);

  const handleOnDrop = useCallback((taskId: number, boardId: number) => {
    const newCurrentBoard = currentBoard;
    const newBoard = boards.find((board) => board.boardId === boardId);
    if (newCurrentBoard && currentTask && newBoard) {
      newCurrentBoard.tasks.splice(newCurrentBoard.tasks.indexOf(currentTask), 1);
      const dropTask = newBoard.tasks.find((task) => task.id === taskId);
      if (dropTask) {
        newBoard.tasks.splice(newBoard.tasks.indexOf(dropTask) + 1, 0, currentTask);
        setBoards(boards.map((board) => {
          if (board.boardId === newBoard.boardId) {
            return newBoard;
          }

          if (board.boardId === currentBoard?.boardId) {
            return currentBoard;
          }

          return board;
        }));
      }
    }

    document.getElementById(String(taskId))?.scrollIntoView({ behavior: "smooth" });

  }, [boards, currentBoard, currentTask]);

  const renderBoard = useCallback((board: IBoard) => {
    return (
      <TaskBoard
        tasks={board.tasks}
        title={board.title}
        onDragTaskStart={handleOnDragTaskStart}
        boardId={board.boardId}
        onDrop={handleOnDrop}
      />
    );
  }, [handleOnDragTaskStart, handleOnDrop]);

  const handleChangeFilter = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(event.target.value);
  }, [setFilterOption]);

  return (
    <PageContainer title="Tasks"
                   onAddIconPress={handleOnAddProjectPress}
                   userImage={avatar}>
      <div className="tasks-page-container">
        <div className="tasks-header-container">
          <div className="tasks-filter-container">
            <text className="tasks-filter-title">View:</text>
            <select onChange={handleChangeFilter} className="tasks-filter-select">
              {FILTER_OPTIONS.map((option) => <option value={option}>{option}</option>)}
            </select>
          </div>
        </div>
        <div className="tasks-boards-container">
          {boards.map(renderBoard)}
        </div>
      </div>
    </PageContainer>
  );
};
