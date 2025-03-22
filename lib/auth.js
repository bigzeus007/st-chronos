import { auth, db } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        email: user.email,
        displayName: user.displayName,
        role: "pending",
        status: "active",
        createdAt: new Date(),
      });
    }

    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const logout = async () => {
  await signOut(auth);
};
