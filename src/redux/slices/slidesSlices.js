import {createSlice} from '@reduxjs/toolkit';


const initialState =  {
      slides: []
}


const slidesReducer =createSlice({
    name: 'slides',
    initialState,
    reducers: {
addSlide: (state, action) => {
state.slides.push(action.payload)
}
    }


})


export const {addSlide} = slidesReducer.actions

export const selectSlide = (state) => state.slides.slides

export default slidesReducer.reducer