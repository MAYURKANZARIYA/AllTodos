import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { edit } from './UseRedu';

function Edit() {

    let {eid} = useParams("")
    // let [] = useState("")
    let  [name, setname] = useState("");
    let  [salary, setsalary] = useState("");

    let dis = useDispatch("")
    let nav = useNavigate("")

    useEffect(()=>{
        fetch("http://localhost:3002/detalils/"+eid)
        .then((res)=>{ return res.json()})
        .then((op)=>{
            setname(op.name)
            setsalary(op.salary)

        })
    },[])


    let hendlesumbit =()=>{
        // e.preventDefault()
        nav("/")

        dis(edit({id:eid,name:name,salary:salary}))

        window.location.reload()

    }

  return (
    <div>

<form onSubmit={hendlesumbit}>


<div>
                <label >id</label>
                <input type="text"  value={eid} 
                disabled
                />
            </div>
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

export default Edit