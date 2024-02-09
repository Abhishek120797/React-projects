
import {useSelector,useDispatch} from 'react-redux'
import { deleteTodo, updateTodo, todoCompleted, toggleEditMode } from '../Features/todo/todoSlice';
import { useState } from 'react';


function Todos() {

  const todos = useSelector(state=>state.todos)
  const dispatch = useDispatch()

  return (
    <>
      <div className='font-bold text-lg'>Todos</div>

        <ul className="list-none">

          {todos.map((todo)=>{
            
              return (<li 
              key={todo.id}
              className={`mt-4 flex justify-between items-center px-4 py-2 rounded
              ${todo.completed? "bg-[#c6e9a7]" :"bg-zinc-800"}`}
              >

                <input 
                type="checkbox"
                onChange={()=>dispatch(todoCompleted(todo.id))}
                disabled={todo.editMode}
                className='cursor-pointer mr-3'
                />
                
                <input 
                type="text"
                value={todo.text}
                readOnly={!todo.editMode}
              
                className={`flex-grow text-left w-full rounded-lg bg-transparent outline-none
                ${ todo.editMode ? "pl-2 border ":""} 
                ${ todo.completed ? "line-through text-slate-800 font-semibold" : "text-white "}`}
                />

                <button
                onClick={()=>dispatch(toggleEditMode(todo.id))}
                disabled={todo.completed}
                className="text-white bg-blue-500 border-0 py-2 px-4 mx-3 focus:outline-none hover:bg-blue-600 rounded"
                >
                    {todo.editMode?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-6">
                      <path fill="none" d="M0 0h24v24H0z"/>
                      <path d="M20 21H4V7h5V3h6v4h5zm-5-9v5h-4V9H6l6-6 6 6h-3z" fill="rgba(0,0,0,0.54)"/>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.71 6.37l-3.08-3.08a1 1 0 0 0-1.42 0L2.29 16.29a1 1 0 0 0-.29.71V21a1 1 0 0 0 1 1h4.29a1 1 0 0 0 .7-.29l10.01-10a1 1 0 0 0 0-1.41zM5.68 19H4v-1.68l9.85-9.86 1.68 1.68zM19.07 7.54L16.49 5l1.68-1.68 2.57 2.57-1.68 1.65z"/>
                    </svg>
                    }
                </button>

                <button 
                onClick={()=>dispatch(deleteTodo(todo.id))}
                disabled={todo.editMode}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                  stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                  </svg>
                </button>

              </li>)
})}

        </ul>
   </>
  );
}

export default Todos;   
  
  