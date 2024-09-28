// app/(game)/page.tsx
import Navbar from "@/components/navbar";

import RequireAuth from "@/components/requireAuth";
import Link from "next/link";
const SelectionPage = () => {
  return (
    <RequireAuth>
    <div>Select environment and level</div>
    </RequireAuth>
  );
};

export default SelectionPage;
