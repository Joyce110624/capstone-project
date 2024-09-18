// services/gameDataService.ts
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

// Function to store game level data
export const setGameLevelData = async (levelId: string, levelData: any) => {
  const levelDocRef = doc(db, "gameLevels", levelId);
  await setDoc(levelDocRef, levelData);
};

// Function to retrieve game level data
export const getGameLevelData = async (levelId: string) => {
  const levelDocRef = doc(db, "gameLevels", levelId);
  const levelDoc = await getDoc(levelDocRef);

  if (levelDoc.exists()) {
    return levelDoc.data();
  } else {
    return null; // Level data doesn't exist
  }
};
