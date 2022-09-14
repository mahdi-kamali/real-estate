import { createSlice } from '@reduxjs/toolkit'

export const dateSlice = createSlice({

    name: 'date',
    initialState: { value: { day: '', month: '', year: '', weekDay: '' } },
    reducers: {
        setDate: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {setDate} = dateSlice.actions;
export default dateSlice.reducer