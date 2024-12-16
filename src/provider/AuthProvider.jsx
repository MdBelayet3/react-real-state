import PropTypes from 'prop-types';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from '../firebase/firebase';

const AuthProvider = ({children}) => {

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

    // AuthCOntext value
    const authInfo = {
        createUser,
        signIn,
        googleSignIn,
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