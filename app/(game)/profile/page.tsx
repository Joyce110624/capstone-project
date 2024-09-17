// app/profile/page.tsx
"use client"
import SignOutButton from "@/components/signOutButton";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Profile</h2>
      {user ? (
        <>
          <p className="mb-4">Logged in as: {user.email}</p>
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
