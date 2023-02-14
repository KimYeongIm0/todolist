import React,{ useState} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList'


function App() {
  
  const [title,setTitle] = useState('');
  const [todos,setTodos] = useState([]);
  const [editTodo,setEditTodo] = useState(null);
  //const [pop,setPop] = useState(false)

  
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
          />
        </div>
        <div>
          <TodoList 
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          editTodo={editTodo}
          title={title}
          />
        </div>

      </div>
    </div>
  ); 
}

export default App;
