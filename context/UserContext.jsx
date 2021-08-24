import React, { createContext, Consumer, useEffect, useState } from "react";
import firebase from "firebase/app";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setUser)
    }, [])

    return (
        <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
    )
}

