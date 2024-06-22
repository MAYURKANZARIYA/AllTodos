import { createSlice } from "@reduxjs/toolkit";

export let userdata =  createSlice({
    name:"jane dofa",
    initialState:[],
    reducers:{

        adddata:(state,action)=>{

            state.push(action.payload)

        },
        addemp:(state,action)=>{
            

            let data =action.payload

            fetch("http://localhost:3002/detalils",{
                method:"post",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(data)
            })

        },

        deleted:(state,action)=>{

            console.log(action.payload)

            let deleted1 = action.payload

            fetch("http://localhost:3002/detalils/"+deleted1.id,{
                method:"delete",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(deleted1)
            })

            window.location.reload()


        },
        edit:(state,action)=>{

            console.log(action.payload.id)
            let data = action.payload

            fetch("http://localhost:3002/detalils/"+action.payload.id,{
                method:"put",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(data)
            })

        }

    }

})

export default userdata.reducer
export var {adddata,addemp,deleted,edit} = userdata.actions