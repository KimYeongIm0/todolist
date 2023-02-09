import React from 'react';
import {v4 as uuidv4} from 'uuid'
import axios from "axios";

const Form = ({title,setTitle,todos,setTodos,editTodo,setEditTodo,pop,setPop}) => {
    
    // const updateTodo=(title,id,complete)=>{
    //     const newTodo = todos.map((todo)=>{
    //         return todo.id === id ? {title,id,complete}: todo
    //     });
    //     setTodos(newTodo);
    //     setEditTodo(null)
        
    // }
    
    // useEffect(()=>{
    //     if(editTodo){
    //         setInput(editTodo.title);
    //     }else{
    //         setInput("")
    //     }
    // },[setInput,editTodo])

    const onInputChange=(event)=>{
        setTitle(event.target.value)
    };

    // const onFormSubmit=(event)=>{
    //     if(pop === true){
    //         setPop(!pop)
    //         event.preventDefault();
    //         setTodos([...todos,{id:uuidv4(),title:input, complete:false}]);
    //         setInput("")
    //     }else{
    //         event.preventDefault();
    //         setTodos([...todos,{id:uuidv4(),title:input, complete:false}]);
    //         setInput("")
    //     }
    
    // }

        const onFormSubmit = async()=>{
            if(pop === true){
                setPop(!pop)
            }
            const {data} = await axios.post("http://localhost:5000/todos",{
                id: uuidv4(),
                title,
                complete:false
            });
            setTitle("")
        }
    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type='text'
                placeholder='Enter a Todo..'
                className='task-input'
                value={title}
                required
                onChange={onInputChange}
                />
            <button className='button-add' type='submit'>
                Add
            </button>
        </form>
        
    );
};

export default Form;