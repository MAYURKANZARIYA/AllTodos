import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { data } from './data'

function Addemp() {

    let [name, setname] = useState("")
    let [salary, setsalary] = useState("")
    let nav = useNavigate("")


    let data1 = { id:data.length+1,name, salary }

    let hendlesumbit = (e) => {
        e.preventDefault()
        data.push(data1)
        nav("/")
    }

    return (
        <div>
            <form onSubmit={hendlesumbit}>
                <h2>create employes</h2>
                <div>
                    <label >name</label>
                    <input type="text" name="" value={name}
                        onChange={(e) => { setname(e.target.value) }}
                    />
                </div>

                <div>
                    <label>salary</label>
                    <input type="text" name="" value={salary}
                        onChange={(e) => { setsalary(e.target.value) }}
                    />
                </div>

                <button>Addemp</button>

            </form>
        </div>
    )
}

export default Addemp