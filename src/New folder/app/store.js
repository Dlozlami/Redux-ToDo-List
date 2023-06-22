import {configureStore} from '@reduxjs/toolkit';
import loginReducer from '../features/login/loginSlice';/*
import myListReducer from '../features/myList/myListSlice';
import registerReducer from '../features/register/registerSlice'*/


export const store = configureStore({
    reducer:{
        login: loginReducer,/*
        myList: myListReducer,
        register: registerReducer,*/
    }
})