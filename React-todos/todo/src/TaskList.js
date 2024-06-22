import React, { useState } from 'react'

function TaskList({ todos,editstodo,ondeletes }) {
    return (
        <div>
            {
                todos.map((v, i) => (
                    <ul key={i}>
                        <li>
                            <Task
                                todo={v}
                                ch={editstodo}
                                deletes={ondeletes}
                            ></Task>

                        </li>
                    </ul>
                ))
            }

        </div>
    )
}


function Task({ todo,ch,deletes }) {
    
    
    const [edit, setedit] = useState(false)
    if (edit) {
        var contect = <>
           <input type="text" value={todo.name} 
           onChange={(a)=>{ch({...todo,name:a.target.value})}} 
           />

            <button onClick={() => { setedit(false) }}>Save</button>
        </>
    }

    else {
         contect = <>
            {todo.name}
            <button onClick={() => { setedit(true) }}>Edit</button>
        </>
    }
    return (
        <div className='my-3'>
            {
                contect
            }
            <button onClick={()=>{deletes(todo.id)}}>Delete</button>

        </div>
    )
}

export default TaskList