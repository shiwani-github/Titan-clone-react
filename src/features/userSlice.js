import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from '../actions/userAction'

const initialState = {
    loading: false,
    userInfo: {},
    userToken: null, 
    error: null,
    success: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
      
       
            [registerUser.pending]: (state) => {
              state.loading = true
              state.error = null
            },
            [registerUser.fulfilled]: (state, { payload }) => {
              state.loading = false
              state.success = true 
            },
            [registerUser.rejected]: (state, { payload }) => {
              state.loading = false
              state.error = payload
            },
          
    },
  }) 

 export default userSlice.reducer