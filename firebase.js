import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCeiTn_h_M0Qn142qjJt32-6tGSQixTgWw",
	authDomain: "bestby-2a9ad.firebaseapp.com",
	projectId: "bestby-2a9ad",
	storageBucket: "bestby-2a9ad.appspot.com",
	messagingSenderId: "201942630744",
	appId: "1:201942630744:web:240677cca611bc2f0be52d",
	measurementId: "G-VHHP35HT8D",
};

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
