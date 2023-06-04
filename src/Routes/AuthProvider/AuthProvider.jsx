import React, { createContext, useEffect, useState } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
import axios from 'axios';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
        const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);

  
     // create user
     const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
     }
    // sign in
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // google sign in

 const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
 }
    // logOut
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    // update profile
    const updateUserProfile = (name, photo) =>{
    
       return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
         })
    }
        useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                // get and set token
             if(currentUser){
                axios.post('http://localhost:5000/jwt', {email: currentUser.email})
                .then(data => {
                    console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false);
                })
             }
             else{
                localStorage.removeItem('access-token')
             }
                
            })
            return () =>{
               return unsubscribe();
            }
        },[])

     

    const authInfo ={
            user,
            loading,
            createUser,
            signIn,
            logOut,
            updateUserProfile,
            googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;