import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

// Function to get user data from Firestore
export const getUserData = async (userId: string) => {
  const userDocRef = doc(db, "users", userId);
  const userDoc = await getDoc(userDocRef);

  if (userDoc.exists()) {
    return userDoc.data();
  } else {
    // User does not exist in Firestore yet
    return null;
  }
};

// Function to initialize user data (e.g., when they sign up)
export const initializeUserData = async (userId: string, email: string) => {
  const userDocRef = doc(db, "users", userId);
  await setDoc(userDocRef, {
    email,
    coins: 0, // Default starting value
    progress: [], // Track game levels completed
  });
};

// Function to update user coins
export const updateUserCoins = async (userId: string, newCoins: number) => {
  const userDocRef = doc(db, "users", userId);
  await updateDoc(userDocRef, {
    coins: newCoins,
  });
};

// Function to update game progress (e.g., level completion)
export const updateUserProgress = async (userId: string, newProgress: string[]) => {
  const userDocRef = doc(db, "users", userId);
  await updateDoc(userDocRef, {
    progress: newProgress,
  })
};