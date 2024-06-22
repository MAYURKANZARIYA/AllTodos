import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { edit } from './Useredu'

function Edit() {

    let { eid } = useParams("")
    let editdata = useSelector((state) => state)
    let nav = useNavigate("")



    let updated1 = editdata.filter((v) => {
        return v.id == eid
    })

    let [name, setname] = useState(updated1[0].name)
    let [salary, setsalary] = useState(updated1[0].salary)

    console.log(editdata)


    let dis = useDispatch("")


    let henldeedit = (e) => {

        e.preventDefault()

        dis(edit({id:eid,name:name,salary:salary}))

        nav("/")

    }

    return (
        <div>
            <form onSubmit={henldeedit} className='text-start mt-2 m-auto w-50'>

                <div className="form-group">
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

export default Edit