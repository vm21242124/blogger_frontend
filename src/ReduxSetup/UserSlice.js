import { createSlice } from "@reduxjs/toolkit";

const user=null;
const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        setuser:(state,action)=>{
             return state=action.payload
        },
        removeuser:(state,action)=>{
           return null
        }
    }
})
export const { setuser, removeuser } = userSlice.actions;
export default userSlice.reducer;