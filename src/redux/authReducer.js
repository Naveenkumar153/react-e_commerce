import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { resetCart } from "./cartReducer";

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
            console.log('state.isLoggedIn',state.isLoggedIn);
        },
        signOut:(state,action) => {
            state.isLoggedIn = false;
        },
        checkEmailExists: (state, action) => {
            const emailExists = state.user.some((user) => user.email === action.payload);
            state.error = emailExists ? 'Email already exists' : null;
        },
        removeAllUsers:(state) => {
            state.user = [];
            console.log('check',state.user )
        },
    },
});

export const { signIn, signUp, signOut,checkEmailExists,removeAllUsers } = authSlice.actions;

export default authSlice.reducer;

// Selector function to check if the user is signed in
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
