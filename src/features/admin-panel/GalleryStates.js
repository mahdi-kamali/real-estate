import { createSlice } from '@reduxjs/toolkit'


export const gallerySlice = createSlice({
    name: 'galleryState',
    initialState: {
        value: 1
    },
    reducers: {
        refreshGallery: (state, action) => {
            state.value = state.value + 1;
        }
    }
})

export const { refreshGallery } = gallerySlice.actions

export default gallerySlice.reducer