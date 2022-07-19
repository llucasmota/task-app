import { useEffect } from 'react';
import style from './resume.module.css';

interface IResume {
  finished: number;
  total: number;
}

export default function ResumeInfoTask({ finished, total }: IResume) {
  useEffect(() => {
    console.log(finished);
  }, [finished]);
  return (
    <div className={style.container}>
      <div className={style.taskCreated}>
        <strong style={{ color: '#4EA8DE' }}>Tarefas criadas</strong>
        <span
          style={{
            color: '#D9D9D9',
            background: '#333333',
            padding: '2px 8px',
            borderRadius: '999px',
            width: '25px',
            height: '19px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
            fontWeight: 700,
          }}
        >
          {total}
        </span>
      </div>
      <div className={style.taskFinish}>
        <strong
          style={{
            color: '#8284FA',
          }}
        >
          Concluídas
        </strong>
        <span
          style={{
            color: '#D9D9D9',
            background: '#333333',
            padding: '2px 8px',
            borderRadius: '999px',
            height: '19px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
            fontWeight: 700,
          }}
        >
          {`${finished} de ${total}`}
        </span>
      </div>
    </div>
  );
}
