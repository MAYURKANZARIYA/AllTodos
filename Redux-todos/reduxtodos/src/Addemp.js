
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './Useredu'
import { useNavigate } from 'react-router-dom'



function Addemp() {

    let adddata = useSelector((state) => state)
    console.log(adddata)

    let [name, setname] = useState("")
    let [salary, setsalary] = useState("")
    let nav = useNavigate("")

    let dis = useDispatch()

    let henldesumbit = (e) => {

        e.preventDefault()
        dis(add({ id: adddata.length+1, name: name, salary: salary }))

        nav("/")

    }
    return (
        <div className='m-auto w-50'>
            <form onSubmit={henldesumbit}>

                <div className="form-group text-start mt-2">
                    <label>Email address</label>
                    <input type="text" className="form-control" value={name} placeholder="Enter name"
                        onChange={(e) => { setname(e.target.value) }}
                    />
                </div>
                <div className="form-group text-start mt-2">
                    <label>Password</label>
                    <input type="text" className="form-control" value={salary} placeholder="salary"
                        onChange={(e) => { setsalary(e.target.value) }}
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    )
}

export default Addemp