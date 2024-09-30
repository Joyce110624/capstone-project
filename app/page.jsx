"use client"; // Add this line to mark the component as a client component

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getUserData } from "@/services/firestoreService";

const HomePage = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null); // Removed the type annotation

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
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Profile Photo */}
      {userData && userData.profilePhoto && (
        <img
          src={userData.profilePhoto} // Use the profile photo URL
          alt="Profile"
          className="absolute top-4 right-4 w-12 h-12 rounded-full border-2 border-white"
        />
      )}

      <div className="text-2xl font-bold mb-4">Home Page</div>
      <div className="flex space-x-4">
        <Link href="/signup" className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign Up
        </Link>
        <Link href="/login" className="bg-green-500 text-white px-4 py-2 rounded">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
