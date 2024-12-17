import PropTypes from 'prop-types';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase';
import { useEffect, useState } from 'react';

const AuthProvider = ({children}) => {
    // 
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // user sign in 
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    } 

    // Google signIn 
    const googleProvider = new GoogleAuthProvider()
    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider);
    }

    // GitHub signIn
    const githubProvider = new GithubAuthProvider();
    const githubSignIn = () =>{
        return signInWithPopup(auth, githubProvider);
    }

    // onAuthStateChanged
    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('inside the onAuthStateChanged ',currentUser);
            setUser(currentUser);
        })
        return () =>{
            unSubscribe();
        }
    },[])

    // logout function
    const logout = () =>{
        return signOut(auth);
    }

    // AuthCOntext value
    const authInfo = {
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        user,
        logout,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;