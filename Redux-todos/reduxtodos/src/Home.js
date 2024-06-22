import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { delted } from './Useredu'

function Home() {

  var datas = useSelector((state) => state)
    const nav = useNavigate()

  let dis = useDispatch("")
  
  let hendledelete =(dlt)=>{
    dis(delted({dlt}))

  }
  let hendleedit=(eid)=>{
    nav("/edit/"+eid)


  }
  return (

    <>
      <h2>dispatch creud with redux</h2>
      <Link to={"/addemp"}>ADD EMPLOY</Link>
      <div>
        <table className='table m-auto w-50'>
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
              datas.map((v) => (
                <tr key={v.id}>
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td>{v.salary}</td>
                  <td>
                    <button>view</button>
                    <button onClick={()=>{hendleedit(v.id)}}>edit</button>
                    <button onClick={()=>{hendledelete(v.id)}}>delete</button>
                  </td>

                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home