import clipBoard from '../../assets/clipboard.svg';
import styles from './noTasks.module.css';

export default function NoTasks() {
  return (
    <div className={styles.noTaskContainer}>
      <img src={clipBoard} alt="clipboard" style={{ marginBottom: '16px' }} />
      <strong style={{ fontSize: '1rem' }}>Você ainda não tem tarefas cadastradas </strong>
      <span style={{ fontSize: '1rem' }}>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
