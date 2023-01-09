import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: { name: "", age: "0", email: "0" , type : "none"  }
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { login } = userSlice.actions;

export default userSlice.reducer;