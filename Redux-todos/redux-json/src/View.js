import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function View() {

    let { vid } = useParams("")
    let [data, setdata] = useState("")

    let nav = useNavigate("")

    useEffect(() => {
        fetch("http://localhost:3002/detalils/" + vid)
            .then((res) => { return res.json() })
            .then((op) => {
                console.log(op)
                setdata(op)
            })
    }, [])
    return (
        <div>
            <h1>id: {data.id}</h1>
            <h1>name:{data.name}</h1>
            <h1>salary:{data.salary}</h1>
            <button onClick={() => { nav("/") }}>exit</button>
        </div>
    )
}

export default View