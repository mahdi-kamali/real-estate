import { createSlice } from '@reduxjs/toolkit'


export const propertiesSlice = createSlice({
    name: 'properties',
    initialState: {
        value: 0
    },
    reducers: {
        refreshProperties: (state, action) => {
            state.value = state.value + 1
        }
    }
})

export const { refreshProperties } = propertiesSlice.actions

export default propertiesSlice.reducer