import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from './data'


function View() {
    let {vid} = useParams("")
    // console.log(vid)

   let match =  data.filter((v)=>{
        return v.id == vid
    })
    console.log(match)

  return (
    <div>
        <h1>id:{match[0].id}</h1>
        <h1>name:{match[0].name} </h1>
        <h1>salary:{match[0].salary}</h1>
    </div>
  )
}

export default View