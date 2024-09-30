// components/Leaderboard.tsx
'use client';

import { useEffect, useState } from "react";
import { getTopPlayers } from "@/services/leaderboardServices";

const Leaderboard = () => {
  const [players, setPlayers] = useState<any[]>([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const topPlayers = await getTopPlayers(5); // Fetch top 5 players
      setPlayers(topPlayers);
    };

    fetchLeaderboard();
  }, []);

  return (
    <>
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
     <ul>
        {players.map((player, index) => (
          <li key={index} className="mb-2">
            {index + 1}. {player.email} - {player.coins} coins
          </li>
        ))}
      </ul>
    </div>
  </>
  );
};

export default Leaderboard;

