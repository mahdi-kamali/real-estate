import { createSlice } from '@reduxjs/toolkit'


export const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState: {
        value: { midSide: "Dashboard" }
    },
    reducers: {
        setMidSide: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setMidSide } = sideBarSlice.actions

export default sideBarSlice.reducer