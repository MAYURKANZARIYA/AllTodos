import React, { useState } from 'react'
import { data } from './data'
import { Link, useNavigate, useParams } from 'react-router-dom'



function Home() {

    let [dt, setdt] = useState(data)

    console.log(dt)

    let hendledelete = (dlt) => {

        setdt(
            dt.filter((v) => {
                return v.id != dlt

            })
        )
    }


    let hendleedit = (eid) => {
        nav("/edit/" + eid)
    }

    let nav = useNavigate("")

    let hendleview = (vid) => {

        nav("/view/" + vid)

    }

    return (
        <div>

            <h1>Crud witout fetch api in reactJs</h1>
            <Link to={"/addemp"} className='btn btn-primary '>addemployes</Link>

            <table className='table m-auto w-50 mt-4'>
                <thead className='table table-dark'>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dt.map((v) => (
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.salary}</td>
                                <td>
                                    <button onClick={() => { hendleview(v.id) }}>view</button>
                                    <button onClick={() => { hendleedit(v.id) }} >edit</button>
                                    <button onClick={() => { hendledelete(v.id) }}>delet</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Home