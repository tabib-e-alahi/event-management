import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children})=> {
    const [user,setUser] = useState(null);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loggedIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth ,googleProvider)
    }

    const githubSignIn = () =>{
        return signInWithPopup(auth,githubProvider)
    }

    const logOut = () =>{
        return signOut(auth)
    }


    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currenUser =>{
            console.log('Inside on state change:',currenUser);
            setUser(currenUser);
        });
        return () =>{
            unSubscribe()
        }
    },[])




    const authInfo = {
        user,
        createUser,
        loggedIn,
        googleSignIn,
        githubSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
};

export default AuthProvider;