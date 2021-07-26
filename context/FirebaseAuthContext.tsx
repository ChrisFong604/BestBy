import * as  React from 'react'
import firebase from 'firebase/app'
import { createContext } from 'react';

type User = firebase.User | null;
type ContextState = { user: User };

const FirebaseAuthContext =
  createContext<ContextState | undefined>(undefined);

const FirebaseAuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<User>(null);
  const value = { user };

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  return (
    <FirebaseAuthContext.Provider value={value}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

function useFirebaseAuth() {
    const context = React.useContext(FirebaseAuthContext);
    if (context === undefined) {
      throw new Error(
        "useFirebaseAuth must be used within a FirebaseAuthProvider"
      );
    }
    return context.user;
  }

export { FirebaseAuthProvider, useFirebaseAuth };
