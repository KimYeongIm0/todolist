import React,{useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList'
import Edit from './components/Edit';

function App() {
  // const initialState = JSON.parse(localStorage.getItme("todos")) || [];
  const [title,setTitle] = useState('');
  const [todos,setTodos] = useState([]);
  const [editTodo,setEditTodo] = useState(null);
  const [open,setOpen]=useState(false);
  const [pop,setPop] = useState(false)

  
  // useEffect(()=>{
  //   localStorage.setItem("todos",JSON.stringfy(todos));
  // },[todos])

  const toggle=()=>{
    setOpen(!open)
  }



  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form
            title={title}
            setTitle={setTitle}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            pop={pop}
            setPop={setPop}
          />
        </div>
        <div>
          <TodoList 
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          toggle={toggle}
          pop={pop}
          setPop={setPop}
          />
        </div>
        {open &&<Edit
        title={title}
        setTitle={setTitle}
          toggle={toggle}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        /> }
      </div>
    </div>
  ); 
}

export default App;
