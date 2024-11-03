// src/components/shared/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">
          <Link to="/">Notes App</Link>
        </h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/notes" className="hover:underline">
            Notes
          </Link>
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
