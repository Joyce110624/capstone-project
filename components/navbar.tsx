// components/Navbar.tsx
import Link from "next/link";
import SignOutButton from "@/components/signOutButton";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/profile" className="mr-4">Profile</Link>
      </div>
      <div>
        {user ? (
          <SignOutButton />
        ) : (
          <Link href="/login" className="mr-4">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
