import React, { createContext, Consumer, useEffect, useState } from "react";
import firebase from "firebase/app";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	
	const [user, setUser] = useState(null);
	const [userInfo, setUserInfo] = useState(fetchUserInfo());

	useEffect(() => {
		firebase.auth().onAuthStateChanged(setUser);

		let info = [];

		firebase.firestore().collection("users").get().then((snapshot) => {
			snapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				info.push(doc.data())
				//temp.push()
			}
		);
		console.log(userInfo)
		})
		/*
        setUserInfo(firebase.firestore().collection("users").get(user));
        console.log(user);
        console.log("useInfo: \n" + userInfo);
        */
	}, []);

	return (
		<AuthContext.Provider value={{ user, userInfo }}>{children}</AuthContext.Provider>
	);
};

const fetchUserInfo = () => {
	let info = [];

	firebase.firestore().collection("users").get().then((snapshot) => {
		snapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			info.push(doc.data())
			//temp.push()
		}
	);
	})

	return info;
}

