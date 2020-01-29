import { createSlice, configureStore } from '@reduxjs/toolkit'

export const stepSlice = createSlice({
  name: 'step',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state === 0 ? state = 0 : state - 1,
    //firstStep: state => state = 1,
    //lastStep: state => state = children.length,
  }
});


export const store = configureStore({
  reducer: stepSlice.reducer
})
