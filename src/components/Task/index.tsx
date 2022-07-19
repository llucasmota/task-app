/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react';
import styles from './task.module.css';
import trash from '../../assets/trash.svg';
import noCheck from '../../assets/noCheck.svg';
import Check from '../../assets/check.svg';

export interface ITask {
  id: string;
  description: string;
  finished: boolean;
}

interface ITaskComponent {
  tasks: ITask[];
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
}

export default function Task({ tasks, toggleTask, removeTask }: ITaskComponent) {
  return (
    <ul className={styles.containerUl}>
      {tasks.length &&
        tasks.map(({ id, description, finished }) => (
          <li className={styles.containerLi} key={id}>
            <div className={styles.containerImg} onClick={() => toggleTask(id)}>
              <img src={finished ? Check : noCheck} alt="no check" />
            </div>
            <p className={styles.paragraph}>{description}</p>
            <div className={styles.containerImg} onClick={() => removeTask(id)}>
              <img src={trash} alt="trash" style={{ width: '12.48px', height: '14px' }} />
            </div>
          </li>
        ))}
    </ul>
  );
}
