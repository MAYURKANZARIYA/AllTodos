import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {

    let nav = useNavigate()

    let { eid } = useParams("")

    let [name, setname] = useState("")
    let [id, setid] = useState("")
    let [salary, setsalary] = useState("")

    // let [data, setdata] = useState("")


    useEffect(() => {

        fetch("http://localhost:50/employesdetails/" + eid)

            .then((res) => { return res.json() })
            .then((op) => {
                console.log(op)
                // setdata(op)
                setname(op.name)
                setsalary(op.salary)
                setid(op.id)
            })

    }, [])

 var editdata = {name,salary}

    let hendlesumbit = (e) => {
        e.preventDefault()

        fetch("http://localhost:50/employesdetails/"+eid, {
            method: "put",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(editdata)

        })

        nav("/")

    }

    return (

        <div>

            <form onSubmit={hendlesumbit}>

                <div>
                    <label >id</label>

                    <input type="text" name=""
                        value={eid}
                        disabled
                    />
                </div>


                <div>
                    <label >name</label>
                    <input type="text"
                        value={name}
                        onChange={(e) => { setname(e.target.value) }}
                    />
                </div>

                <div>
                    <label >salary</label>
                    <input type="text"
                        value={salary}
                        onChange={(e) => { setsalary(e.target.value) }}
                    />
                </div>

                <button>update</button>
            </form>
        </div>

    )
}

export default Edit