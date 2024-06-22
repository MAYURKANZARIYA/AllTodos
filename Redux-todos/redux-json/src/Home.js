import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UseRedu, { deleted } from './UseRedu'
import { useNavigate } from 'react-router-dom'

function Home() {

    let nav = useNavigate("")

    let dis = useDispatch("")

    let getdata1 = useSelector((state) => state.acces)[0]
    console.log(getdata1)


    let henldeview = (vid) => {
        nav("/view/" + vid)

    }

    let henldedlt = (dlt) => {

        dis(deleted(dlt))



    }


    let hendleedit = (eid) => {

        nav("/edit/"+eid.id)
    }

    return (

        <div>

            <div>
                <h1>redux fetch api crud</h1>
                <button onClick={() => { nav("/addemp") }}>addemp</button>
            </div>

            <div>
                <table className='table table-center m-auto w-50'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>salary</th>
                            <th>action</th>

                        </tr>
                    </thead>

                    <tbody>
                        {
                            getdata1 && getdata1.map((v) => (
                                <tr>
                                    <td>{v.id}</td>
                                    <td>{v.name}</td>
                                    <td>{v.salary}</td>
                                    <td>
                                        <button onClick={() => { henldeview(v.id) }}>view</button>
                                        <button onClick={() => { hendleedit(v) }}>edit</button>
                                        <button onClick={() => { henldedlt(v) }}>delete</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home