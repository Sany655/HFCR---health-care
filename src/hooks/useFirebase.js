import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState({ code: '', message: '' })

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    useEffect(()=>{
        setError({ code: '', message: '' })
    },[])

    const signinUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        signOut(auth)
            .then(res => setUser({}))
    }

    const signupUsingEmailPassword = ({ name, email, password }) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                handleUpdateProfile(name)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError({ code: errorCode, message: errorMessage })
                setLoading(false)
            });

    }

    const handleUpdateProfile = (name) => {
        updateProfile(auth.currentUser, { displayName: name }).then(res=>{
            setError({ code: '', message: '' })
            setLoading(false)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError({ code: errorCode, message: errorMessage })
        });
    }

    const handleLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError({ code: '', message: '' })
                setLoading(false)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError({ code: errorCode, message: errorMessage })
                console.log(error);
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (result) => {
            if (result) {
                setUser(result)
            } else {
                setUser({})
            }
            setLoading(false)
        })
    }, [])

    return {
        user,
        signinUsingGoogle,
        logout,
        loading,
        error,
        signupUsingEmailPassword,
        handleLogin
    }
};

export default useFirebase;