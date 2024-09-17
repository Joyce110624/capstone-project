// app/(game)/page.tsx
import RequireAuth from "@/components/requireAuth";
import Link from "next/link";
const GamePage = () => {
  return (
    <RequireAuth>
      {/* Your game logic goes here */}
      <div>Select environment and level</div>
    </RequireAuth>
  );
};

export default GamePage;
