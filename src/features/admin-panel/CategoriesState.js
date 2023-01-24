import { createSlice } from '@reduxjs/toolkit'


export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        value: "STATIC"
    },
    reducers: {
        refreshCategories: (state, action) => {
            const random = `REFRESH ${Math.random()*10000}`
            state.value = random;
        }
    }
})

export const { refreshCategories } = categoriesSlice.actions

export default categoriesSlice.reducer