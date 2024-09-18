"use client"
import SignOutButton from "@/components/signOutButton";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserData } from "@/services/firestoreService";

const ProfilePage = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const data = await getUserData(user.uid);
        setUserData(data);
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Profile</h2>
      {user ? (
        <>
          <p className="mb-4">Logged in as: {user.email}</p>

          {userData ? (
            <div className="mb-4">
              <p>Email: {userData.email}</p>
              <p>Coins: {userData.coins}</p>
              <p>Game Progress: {userData.progress.join(", ")}</p>
            </div>
          ) : (
            <p>Loading user data...</p>
          )}

          <SignOutButton />
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign up</Link>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
