import './App.css';
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };


  const addTask = () => {
    // const newTodoList = [...todoList, newTask];
    // setTodoList(newTodoList);
    // console.log(newTodoList);
    ///////////////////
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,

    }
    setTodoList([...todoList, task]);

  };

  // console.log(todoList.id);

  // console.log(newTask);
  // console.log(todoList);

  const deleteTask = (id) => {
    // const newTodoList =todoList.filter((task)=>task !==taskName
    // if(task===taskName){
    //   return false;
    // }else{
    //   return true;
    // }
    // return task !== taskName
    // );

    setTodoList(todoList.filter((task) => task.id !== id));


  };
  //complete task
  const completeTask = (id) => {
    setTodoList(todoList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true };

      } else {
        return task;
      }

    })

    );
  };

  return (
    <div className='App'>
      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task </button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
            /* (
              <div>
                <h1>{task.taskName}</h1>
                <button onClick={()=>deleteTask(task)}>X</button>
              </div>
            ); */
          );
        })}
      </div>
    </div>
  )


}

export default App;
