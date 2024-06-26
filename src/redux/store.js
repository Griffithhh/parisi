import {configureStore} from '@reduxjs/toolkit'
import slidesReducer from './slices/slidesSlices.js'

const store = configureStore({
    reducer: {
        slides: slidesReducer,
    }
})

export default store