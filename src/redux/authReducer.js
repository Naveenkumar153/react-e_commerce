import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:[],
        isLoggedIn:false,
    },
    reducers:{
        signIn:(state,action) => {
            state.user.push(action.payload);
        },
        signUp:(state,action) => {
            let checkEmail;
            if(state.user.length !== 0){
             checkEmail = state.user.find(item => (item.email === action.payload.email &&  item.password === action.payload.password));
            }
            if(checkEmail){
                state.isLoggedIn = true;
            }else{
                state.isLoggedIn = false;
            }
        },
        signOut:(state,action) => {
            state.isLoggedIn = false;
        },
        checkEmailExists: (state, action) => {
            const emailExists = state.user.some((user) => user.email === action.payload);
            state.error = emailExists ? 'Email already exists' : null;
        },
    },
});

export const { signIn, signUp, signOut,checkEmailExists } = authSlice.actions;

export default authSlice.reducer;

// Selector function to check if the user is signed in
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
