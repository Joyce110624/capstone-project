// components/Navbar.tsx
import Link from "next/link";



const Navbar = () => {
   return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <Link href="/play" className="mr-4">Home</Link>
        <Link href="/leaderboard" className="mr-4">Leaderboard</Link>
        <Link href="/profile" className="mr-4">Profile</Link>
      </div>
      <div>
      </div>
    </nav>
  );
};

export default Navbar;
