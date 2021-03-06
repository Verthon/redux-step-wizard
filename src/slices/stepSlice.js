import { createSlice, configureStore } from '@reduxjs/toolkit'

export const stepSlice = createSlice({
  name: 'step',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    getActiveStep: state => state,
    //firstStep: state => state = 1,
    //lastStep: state => state = children.length,
  }
});


export const store = configureStore({
  reducer: stepSlice.reducer
})
