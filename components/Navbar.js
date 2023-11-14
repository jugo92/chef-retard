// components/Navbar.js

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-xl font-bold">
            Chef je suis encore en retard
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
