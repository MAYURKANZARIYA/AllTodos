import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Tables() {

  let nav = useNavigate("")
  let [data, setdata] = useState()

  useEffect(() => {
    fetch("http://localhost:50/employesdetails")
      .then((res) => { return res.json() })
      .then((op) => {
        console.log(op)
        setdata(op)
      })

  }, [])

  let hendledelete = (dlt) => {


    fetch("http://localhost:50/employesdetails/"+dlt,{
      method:"delete",
      headers:{"content-type":"application/json"}
    })

window.location.reload()

  }



  let hendleview = (vid) => {

    console.log(vid)

    nav("/view/"+vid)

    // fetch("http://localhost:50/employesdetails/"+dlt,{
    //   method:"delete",
    //   headers:{"content-type":"application/json"}
    // })


  }
  let handdleedit = (eid) => {

    nav("/edit/"+eid)

  }
  



  return (

    <div>
      <h1>react json-server live todo</h1>
      <button onClick={() => { nav("/emp") }}>Addemploes</button>
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
            data && data.map((v) => (
              <tr>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.salary}</td>
                <td>
                  <button onClick={()=>{hendleview(v.id)}}>view</button>
                  <button onClick={()=>{handdleedit(v.id)}}>edit</button>
                  <button onClick={() => { hendledelete(v.id) }}>delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>


      </table>

    </div>
  )
}

export default Tables