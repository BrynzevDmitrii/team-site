

import {  createSlice, PayloadAction } from "@reduxjs/toolkit";

type ActionUser = {
    id: string,
    fullName: string,
    email: string,
    password: string,
    passwordCheck:string,
}

type Register = {
    id: string,
    name: string,
    email: string,
    password: string
    token: string
}

type RegistrationState = {
    dataRegistration:Register[],
    isValidEmail:boolean,
    isPasswordError: boolean,
}

const initialState: RegistrationState = {
    dataRegistration: [],
    isValidEmail:false,
    isPasswordError:false,
} 



const registerSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {      
        addNewUser(state, action: PayloadAction<ActionUser>){

            const emailRgx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ ;
            let email: string;

            if(action.payload.email){
                if(action.payload.email.match(emailRgx)){
                    email = action.payload.email;
                }else{
                    state.isValidEmail = true;
                }
            }else{
                alert('Заполните поле email')
            }
          
        
            if(action.payload.password!==''&&action.payload.passwordCheck!==''){
                if( action.payload.password === action.payload.passwordCheck){
                    state.dataRegistration.push({
                        id: new Date().toDateString(),
                        name:action.payload.fullName,
                        email: email,
                        password: action.payload.password,              
                        token: "rewj232ibh24deiqwde5ljk44dfqewudh8bh24deqwde5ljk4",
                    })
                }
                else
                {
                    state.isPasswordError = true;
                }
            }else{
                alert('Введите пароль')
            }
           
        }
    },
    
})

export const { addNewUser } = registerSlice.actions;
export  default registerSlice.reducer;


