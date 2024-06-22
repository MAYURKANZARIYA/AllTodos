import React, { useState } from 'react'

function AddTodo({props}) 
{
   const [state,setstate] =  useState("");
  return (
    <div>
       <input type="text" value={state} onChange={(e)=>{setstate(e.target.value)}}/>
       
        <button onClick={()=>{props(state)}}>Add Todo</button>
    </div>
  )
}

export default AddTodo;