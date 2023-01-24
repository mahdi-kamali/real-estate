import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        // value: {
        //     user: {
        //         name: "", email: "0", role: "none", token: ''
        //     }  ,
        //     token : ""
        // }
        value: undefined
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
            const data = JSON.stringify(state.value)
            localStorage.setItem("data", data)
        },
        signUp: (state, action) => {
            let user = action.payload.user
            user.role = 0 ;
            let token = action.payload.token;
            const value =  {}
            value.user = user ;
            value.token = token ;
            state.value = value
            const data = JSON.stringify(value)
            localStorage.setItem("data", data)
        }


    }
})

export const { login, signUp } = userSlice.actions;

export default userSlice.reducer;
