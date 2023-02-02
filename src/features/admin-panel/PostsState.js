import { createSlice } from '@reduxjs/toolkit'


export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        value: "STATIC"
    },
    reducers: {
        refreshPosts: (state, action) => {
            const random = `REFRESH ${Math.random()*10000}`
            state.value = random;
        }
    }
})

export const { refreshPosts } = postsSlice.actions

export default postsSlice.reducer