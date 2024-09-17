// app/page.tsx
import Link from "next/link";
const HomePage = () => {
  return (
      <div>
          <div>Home page</div>
        <Link href="/signup">sign up</Link>
        <Link href="/login">log in</Link>
      </div>
  );
};

export default HomePage;
