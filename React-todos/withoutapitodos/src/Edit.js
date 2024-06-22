import React, { useState } from 'react'
import { data } from './data'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {

    let { eid } = useParams("")
    let nav = useNavigate("")


    let editmatch = data.filter((v) => {
        return v.id == eid
    })

    // console.log(editmatch)

    let [name, setname] = useState(editmatch[0].name)
    let [salary, setsalary] = useState(editmatch[0].salary)


    let hendleedit = (e) => {

        data.filter((v) => {

            if (v.id == eid) {
                v.name = name;
                v.salary = salary

            }
        })

        e.preventDefault()
        nav("/")

    }

    return (
        <div>
            <form onSubmit={hendleedit}>
                <h2>Edit employes</h2>
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

                <button>Save</button>

            </form>
        </div>
    )
}

export default Edit