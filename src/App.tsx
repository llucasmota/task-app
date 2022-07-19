/* eslint-disable no-param-reassign */
import { useCallback, useState } from 'react';
import { v4 } from 'uuid';
import './App.css';
import AddTaskComponent from './components/AddTask';
import Header from './components/Header';
import NoTasks from './components/NoTasks';
import ResumeInfoTask from './components/ResumeInfoTask';
import Task, { ITask } from './components/Task';
import { mockTAsks } from './mocks/mock-task';

function App() {
  const [tasks, setTasks] = useState<ITask[]>(mockTAsks);

  const toggleTask = useCallback(
    (id: string) => {
      setTasks(tasks.map((item) => (item.id === id ? { ...item, finished: !item.finished } : item)));
    },
    [tasks],
  );

  const removeTask = useCallback(
    (id: string) => {
      setTasks(tasks.filter((item) => item.id !== id));
    },
    [tasks],
  );

  const resume = () => {
    const finished = tasks.reduce((total, task) => {
      if (task.finished) {
        total += 1;
        return total;
      }
      return total;
    }, 0);

    return finished;
  };

  const addTask = (description: string) => {
    setTasks([...tasks, { id: v4(), description, finished: false }]);
  };

  return (
    <div className="App">
      <Header />
      <main
        style={{
          maxWidth: '736px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '282px',
        }}
      >
        <AddTaskComponent addTask={addTask} />
        <ResumeInfoTask finished={resume()} total={tasks.length} />
        {tasks.length ? <Task tasks={tasks} removeTask={removeTask} toggleTask={toggleTask} /> : <NoTasks />}
      </main>
    </div>
  );
}

export default App;
