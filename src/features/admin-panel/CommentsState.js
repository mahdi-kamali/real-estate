import { createSlice } from '@reduxjs/toolkit'


export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        value: 0
    },
    reducers: {
        refreshComments: (state, action) => {
            state.value = state.value + 1;
        }
    }
})

export const { refreshComments } = commentsSlice.actions

export default commentsSlice.reducer