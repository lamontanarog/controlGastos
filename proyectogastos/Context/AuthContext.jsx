import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const signUp = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password);
    }
    const login = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
    }
    const loginOut = async () => {
        try {
            await signOut(auth);
            console.log("La sesión se cerró correctamente");
        } catch (error) {
            console.log("Ocurrió un error al cerrar la sesión:", error);
        }
    }
    return (
        <AuthContext.Provider value={{ signUp, login, loginOut }}>
            {children}</AuthContext.Provider>
    )
}

export default AuthProvider;