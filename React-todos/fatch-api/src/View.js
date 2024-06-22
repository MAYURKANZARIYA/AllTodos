import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function View() {

    let { vid } = useParams("")
    console.log(vid)
    let nav = useNavigate("")

    let [data, setdata] = useState("")

    useEffect(() => {
        fetch("http://localhost:50/employesdetails/" + vid)

            .then((res) => { return res.json() })
            .then((op) => {
                console.log(op)
                setdata(op)
            })
    }, [])

    return (
        <div>
            <h1>id:{vid}</h1>
            <h1>name:{data.name}</h1>
            <h1>salary:{data.salary}</h1>
            <button onClick={() => { nav("/") }}>exit</button>
        </div>
    )
}

export default View