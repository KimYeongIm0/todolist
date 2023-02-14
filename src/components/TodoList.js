import '../App.css'
import React,{ useEffect} from 'react';
import axios from 'axios';



// const 연진이 =({pop,setPop})=>{
//     const close=()=>{
//         setPop(!pop)
//     }
//     return (
//         <div className='popimg'>
//         <img classNmae='연진이' alt='' src='https://cdn.maily.so/202301/trendaword/1674086037867122.jpeg' />
//         <button calssName='button-edit' onClick={close}>
//         '닫기!'
//         </button>
//         </div>
//     )
//  }

const TodoList = ({todos,setTodos,setEditTodo,editTodo}) => {
    // const [completeImg , setCompleteImg] = useState([])
    
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

    const handleDelte= async({id})=>{
        await axios.delete(`http://localhost:5000/todos/${id}`);
        await readList()
        }
    

    const handleComplete = async({id,title,complete}) =>{
        await axios.patch(`http://localhost:5000/todos/${id}`,{
            complete: !complete,
        });
        await readList()
    }

    const handelUpdate=(todo)=>{
        setEditTodo(todo)
        console.log(editTodo)
    }

    // //
    // useEffect(()=>{
    //     (async ()=>{
    //         const {data} = await axios.get("http://localhost:5000/todos")
    //       if(data.every(el=>el.complete === true)){
    //         setPop(!pop)
    //       }else if(data.length === 0){
    //         setPop(false)
    //       }else setPop(false)
        
    //     })();
    //     // if(completeImg.length !==0 && completeImg.length === todos.length){
    //     //     setPop(!pop)
    //     // }else if(completeImg.length !==0){
    //     //     setPop(false)
    //     // }
        
   
    // },[todos])
    
    // const complete = async({id})=>{
    //     // const data = todos.find((todo)=>todo.id === id);
    //     let re = completeImg.some(el=>el.id === data.id)
    //     //클릭했을 때의 값이 같으면 data에 넣는다
    //     if(completeImg.length ===0){
    //         completeImg.push(data)
    //         setCompleteImg(completeImg)
    //     }else if(re === false){
    //         completeImg.push(data)
    //         setCompleteImg(completeImg)
    //     }else if(re === true){
    //         completeImg.pop(data)
    //         setCompleteImg(completeImg)
    //     }
    // }



    return (
        <div>
            {todos.map((todo)=>(
                <div className='list-item' key={todo.id}>
                    <div
                        type='text'
                        value={todo.title}
                        className={`list ${todo.complete ? 'complete' : ''}  `}
                        onChange={(event) => event.preventDefault()}
                    >{todo.title}</div>
                    <div>
                        <button className='button-complete task-button'
                            onClick={() => {
                                handleComplete(todo);
                            } }>
                            <i className='fa fa-check-circle'></i>
                        </button>
                        <button className='button-edit task-button'
                            onClick={() => {handelUpdate(todo) } }>
                            <i className='fa fa-edit'></i>
                        </button>
                        <button className='button-delete task-button'
                            onClick={() => handleDelte(todo)}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                </div>
                
            ))}
            {/* {pop === false ? null :
                // eslint-disable-next-line react/jsx-pascal-case
                <연진이 pop={pop} setPop={setPop}/>
            } */}
        </div>
    );
};

export default TodoList;