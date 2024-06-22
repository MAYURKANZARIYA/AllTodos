import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Addemp() {


    let [name,setname] = useState("")
    let [salary,setsalary] = useState("")

    let nav = useNavigate("")




let hendlesumbit =(e)=>{
    e.preventDefault()

    let data = {name,salary}


    fetch("http://localhost:50/employesdetails",{
        method:"post",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
    })

nav("/")
}
  return (
    <div>
        <form onSubmit={hendlesumbit}>

            <div>
                <label >name</label>
                <input type="text" name="" 
                value={name} 
                onChange={(e)=>{setname(e.target.value)}}
                />
            </div>

            <div>
                <label >salary</label>
                <input type="text" name=""
                value={salary} 
                onChange={(e)=>{setsalary(e.target.value)}}
                 />
            </div>

            <button>add thay gyo dofa</button>
        </form>
    </div>
  )
}

export default Addemp