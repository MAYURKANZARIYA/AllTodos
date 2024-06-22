import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { data } from "./data";


export let userdata = createSlice({
    name: 'jadav',
    initialState: data,
    reducers: {
        add: (state, action) => {

            state.push(action.payload)

        },

        delted: (state, action) => {
            return state.filter((v) => {
                return v.id !== state[0].id
            })

        },

        edit:(state,action)=>{
            state.find((v)=>{

                if(v.id==action.payload.id)
                    {
                        v.name =action.payload.name;
                        v.salary =action.payload.salary;
                    }
            })

        }

    }

})

export const { add, delted,edit} = userdata.actions;
export default userdata.reducer

