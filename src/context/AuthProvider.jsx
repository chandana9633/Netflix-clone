import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // SIGN UP
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // LOGIN
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // LOGOUT
  const logout = () => {
    return signOut(auth);
  };

  // CHECK USER STATUS
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// CUSTOM HOOK
export function useAuth() {
  return useContext(AuthContext);
}
