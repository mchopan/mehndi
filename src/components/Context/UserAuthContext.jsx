import { createContext, useContext , useEffect, useState} from "react";
import {auth} from '../../firebaseConfig'
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
 } from 'firebase/auth'


const userAuthContext = createContext();


export function UserAuthContextProvider({children}){
    
    const [user, setUser] = useState("")
    function login(email , password){
        return signInWithEmailAndPassword(auth, email , password)
    };

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth ,(currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return (<userAuthContext.Provider value={{user, login, logOut}} > {children} </userAuthContext.Provider>)

}

export function useUserAuth() {
    return useContext(userAuthContext)
}
