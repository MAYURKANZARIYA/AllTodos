import React, { useState } from 'react'

function Task() {
   const [state,setstate] = useState()

    let ary = [
        {id:1,stata:"GJ",dist:["surat","ahmedadav"]},
        {id:2,stata:"MP",dist:["bhopal","ujjain"]},
        {id:3,stata:"UP",dist:["mathura","ayodhya"]}
    ]

    function handle(id)
    {
       const ravi = ary.find((v)=>{
            return v.id==id
        })
        setstate(ravi)
      
    }
  return (
    <div>
         <select>
        {
          ary.map((v)=>(
            // <li onClick={()=>{handle(v.id)}}>{v.stata}</li>
            // <select  onClick={()=>{handle(v.id)}}>
                <option onClick={()=>{handle(v.id)}}>{v.stata}</option>
            // </select>
          ))
        }
         </select>
        {
           <div>
            {
                state && state.dist.map((v)=>(
                   <li>{v}</li>
                ))
            }
           </div>
        }

    </div>
    
  )
}

export default Task