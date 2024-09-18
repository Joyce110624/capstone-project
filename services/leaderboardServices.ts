// services/leaderboardService.ts
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";

// Function to retrieve top players based on coins
export const getTopPlayers = async (limitCount: number = 5) => {
  const leaderboardQuery = query(
    collection(db, "users"),
    orderBy("coins", "desc"), // Sort by the number of coins in descending order
    limit(limitCount)
  );
  const querySnapshot = await getDocs(leaderboardQuery);

  const leaderboard: any[] = [];
  querySnapshot.forEach((doc) => {
    leaderboard.push(doc.data());
  });

  return leaderboard;
};
