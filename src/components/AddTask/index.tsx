import React, { useState } from 'react';
import styles from './addTask.module.css';
import plus from '../../assets/plus.svg';

interface IAddTask {
  addTask: (description: string) => void;
}

export default function AddTaskComponent({ addTask }: IAddTask): JSX.Element {
  const [newTask, setNewTask] = useState('');
  return (
    <div className={styles.container}>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className={styles['input-add']}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button onClick={() => addTask(newTask)} className={styles.button} type="button">
        Criar
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
}
