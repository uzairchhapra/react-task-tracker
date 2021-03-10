import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'A',
      day: 1,
      reminder: true,
    },
    {
      id: 2,
      text: 'B',
      day: 2,
      reminder: false,
    },
    {
      id: 3,
      text: 'C',
      day: 3,
      reminder: true,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    console.log('delete ', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header title='Task Tracker' />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No tasks to show'}
    </div>
  );
}

export default App;
