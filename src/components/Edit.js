import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

export const Modal = styled.div`
    border-radius: 10px;
    background-color: gray;
    width: 300px;
    height: 200px;
    display: flex;
    z-index: 99;
    position: absolute;
    top: 20%;
    left: 50%;
`

const Edit = ({toggle,todos,setTodos,editTodo,setEditTodo,title,setTitle}) => {
    const[value,setValue] = useState('');

    const readList = async()=>{
        const {data} = await axios.get("http://localhost:5000/todos")
        setTodos(data)
    };
    useEffect(()=>{
        (async ()=>{
            await readList();
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

const onInputChange=(event)=>{
    setValue(event.target.value)
}

const onFormSubmit = async({id,title,complete})=>{
        await axios.patch(`http://localhost:5000/todos/${id}`,{
            title: value
        });
        await readList()
        toggle()
        
}
// useEffect(()=>{
//     if(editTodo){
//         setValue(editTodo.title)
//     }else{
//         setValue("")
//     }
   
    
// },[editTodo,setValue]);


    // const update=(title,id,complete)=>{
    //     const newValue = todos.map((todo)=>{
    //         return todo.id === id ? {title,id,complete} : todo
    //     });
    //     setTodos(newValue);
    //     setEditTodo('')
    // }
    

    // const onFormSubmit=(event)=>{
    //     event.preventDefault();
    //     update(value, editTodo.id, editTodo.complete)
    //     toggle();
    // }
    


    return (
        <>
        {todos.map((todo)=>(
               <Modal>
               <form onSubmit={()=>onFormSubmit(todo)}>
               <input 
                   type='text'
                   placeholder=''
                   className='task-input'
                   value={value}
                   required
                   onChange={onInputChange}
                   />
               <button className='button-add' type='submit'>
                   Add
               </button>
               {/* <button className='button-close' type='submit' onClick={()=>toggle()}>
                   close
               </button> */}
            </form>
           
           
      </Modal>
        ))}
        </>
           
    );
};

export default Edit;