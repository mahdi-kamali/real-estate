import { createSlice } from '@reduxjs/toolkit'


export const popUpStatesSlice = createSlice({
    name: 'popUp',
    initialState: {
        value: "none"
    },
    reducers: {
        setPopUp: (state, action) => {
            state.value = action.payload;
        }
       
    }
})

export const { setPopUp  } = popUpStatesSlice.actions

export default popUpStatesSlice.reducer