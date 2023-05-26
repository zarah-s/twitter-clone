import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: []
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
})

// Action creators are generated for each case reducer function
export const { } = postSlice.actions

export default postSlice.reducer