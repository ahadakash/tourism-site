import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.init";


initializeAuthentication();

// Hooks components usefirebase file

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [login, setLogIn] = useState(false)
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    // Google Sign In

    const handleGoogleSign = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
                console.log(user)
            })

    }

    // Logout

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    const handleChangeCkBox = e => {
        setLogIn(e.target.checked)
    }


    const handleNameChange = e => {
        setName(e.target.value)
    }
    const changeEmailInput = e => {
        setEmail(e.target.value)
    }
    const changePasswordInput = e => {
        setPassword(e.target.value)
    }


    // Registration or Sign up 

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password)
        if (password.length < 6) {
            setError('password must be at lest 6 chrectar long')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('password must be 2 upper case');
            return;
        }

        login ? poccessingLogIn(email, password) : registerNewUser(email, password)


    }

    const poccessingLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(user)
                setError('')
            })

            .catch(error => {
                setError(error.message)
            })
    }
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                console.log(user)
                setError('')
                verifyUser()
                setUserName()
            })

            .catch(error => {
                setError(error.message)
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    // Verify User

    const verifyUser = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }

    //    Reset Password

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }

    return {
        user,
        error,
        login,
        logOut,
        handleGoogleSign,
        handleChangeCkBox,
        handleNameChange,
        changeEmailInput,
        changePasswordInput,
        handleRegistration,
        handleResetPassword,
    }
}


export default useFirebase;