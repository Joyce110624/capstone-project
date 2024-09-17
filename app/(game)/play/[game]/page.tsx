// app/(game)/page.tsx
import RequireAuth from "@/components/requireAuth";
import Link from "next/link";
const GamePage = () => {
  return (
    <RequireAuth>
      {/* Your game logic goes here */}
      <div>Game Content</div>
    </RequireAuth>
  );
};

export default GamePage;
