import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  user_name: string | null,
  user_email: string | null,
  user_image: string | null
}

const initialState: UserState = {
  user_name: null,
  user_email: null,
  user_image: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    setUserData: (state, action: PayloadAction<any>) => {
      state.user_name = action.payload.user.name
      state.user_email = action.payload.user.email
      state.user_image = action.payload.user.image
    },

    removeUserData: (state) => {
      state.user_name = null;
      state.user_email = null;
      state.user_image = null;
    }

    
  },
})

// Action creators are generated for each case reducer function
export const { setUserData, removeUserData } = userSlice.actions

export default userSlice.reducer