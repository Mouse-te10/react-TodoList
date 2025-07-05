import { Typography, Divider  } from 'antd';
import Input from './components/Input.jsx';
import Item from './components/Item.jsx'
import { useState } from 'react';

function App() {
  const [arrTasks, setArrTasks] = useState([])
  return (
    <div style={{display: 'grid', justifyContent: 'center'}}>
      <Typography.Title style={{textAlign: 'center'}}
      >Todo List</Typography.Title>
      <Divider />
      <Input addTask={addTask}/>
      <Item arrTasks={arrTasks} deleteTask={deleteTask}/>
    </div>
  );

  function addTask(value) {
    setArrTasks(prev => {
      if(prev.includes(value) || value === '') {
        return prev
      }
      return [...prev, value]
    })
  }

  function deleteTask(value) {
    setArrTasks(prev => prev.filter(item => item !== value))
  }
}

export default App;
