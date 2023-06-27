import React,{createContext} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    }
    return(
        <AuthContext.Provider value={{signUp}}>{children}</AuthContext.Provider>
    )
}