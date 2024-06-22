import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addemp } from './UseRedu';
import { useNavigate } from 'react-router-dom';

function Addemp() {

    let  [name, setname] = useState("");
    let  [salary, setsalary] = useState("");

    let dis = useDispatch("")
    let nav =useNavigate("")

    let hendlesumbit =(e)=>{

        e.preventDefault()
        console.log({name,salary})
        dis(addemp({name,salary}))

        nav("/")
        window.location.reload()


    }

  return (
    <div>
        <form onSubmit={hendlesumbit}>
            <div>
                <label >name</label>
                <input type="text"  value={name} 
                onChange={(e)=>{setname(e.target.value)}}

                />
            </div>
            <div>
                <label >salary</label>
                <input type="text" value={salary}
                onChange={(e)=>{setsalary(e.target.value)}}


                 />
            </div>
            
            <button>save</button>
        </form>
    </div>
  )
}

export default Addemp