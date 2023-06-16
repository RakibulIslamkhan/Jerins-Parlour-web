"use client";
import app from "@/firebase/firebase.init";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);
export function UserContext({ children }) {
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const [error, setError] = useState();
  const [user, setUser] = useState({});
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true)
  const [admin, setAdmin] = useState(false)
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser)
      setLoading(false)
    })
    return () =>{
      unsubscribe()
    }
  },[])
  useEffect(()=>{
    fetch(`https://hidden-beyond-00743-b937df4edd39.herokuapp.com/books/user?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setInfo(data))
  },[user?.email])
  useEffect(()=>{
    fetch(`https://hidden-beyond-00743-b937df4edd39.herokuapp.com/users/${user?.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data?.admin))
  },[user?.email])

  const logOutUser = () => {
    return signOut(auth)
  }
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = async() => {
    return await signInWithPopup(auth, googleProvider);
  };
  const facebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  const updateUserName = async (first, last) => {
    return await updateProfile(auth.currentUser, {
      displayName: first + " " + last,
    })
      .then(() => {
        // Profile updated!
        console.log("update");
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
      });
  };
  const authInfo = {
    user,
    error,
    loading,
    info,
    admin,
    setLoading,
    setError,
    createUser,
    signIn,
    googleSignIn,
    updateUserName,
    facebookSignIn,
    logOutUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
