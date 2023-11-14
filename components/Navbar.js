// Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-bold">
            <Link href="/">Chef je suis encore en retard</Link>
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Chef Retard</Link>
            </li>
            <li>
              <Link href="/excuses">Excuses</Link>
            </li>
            <li>
              <Link href="/minimiser-retard">Minimiser Retard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
