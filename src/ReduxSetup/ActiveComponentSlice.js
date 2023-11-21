import { createSlice } from "@reduxjs/toolkit";


const activeCmpslice=createSlice({
    name:"activeComponents",
    initialState:"feed",
    reducers:{
        setActiveComp: (state,action)=>{
            return state=action.payload;
        }
    }
})
export const {setActiveComp} =activeCmpslice.actions;
export  default activeCmpslice.reducer