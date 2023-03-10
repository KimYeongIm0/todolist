import React ,{useEffect}from 'react';
import {v4 as uuidv4} from 'uuid'
import axios from "axios";

const Form = ({title,setTitle,todos,setTodos,editTodo,setEditTodo}) => {
    

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

    useEffect(()=>{
        if(editTodo){
            setTitle(editTodo.title)
        }else{
            setTitle("")
        }
    },[setTitle,editTodo])

        const onFormSubmit = async()=>{
            if(!editTodo ){
                await axios.post("http://localhost:5000/todos",{
                    id: uuidv4(),
                    title,
                    complete:false
                });
                setTitle("")
            }else{
                updateTodo(editTodo.id)
                }    
            }
    const updateTodo=async(id)=>{
        await axios.patch(`http://localhost:5000/todos/${id}`,{
            title:title
        })
        await readList()
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