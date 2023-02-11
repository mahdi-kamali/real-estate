import { createSlice } from '@reduxjs/toolkit'


export const colorsSlice = createSlice({
    name: 'colors',
    initialState: {
        value: 0
    },
    reducers: {
        refreshColors: (state, action) => {

            state.value = state.value + 1;
        }
    }
})

export const { refreshColors } = colorsSlice.actions

export default colorsSlice.reducer