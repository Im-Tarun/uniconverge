import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-800 text-white px-12 py-3 flex justify-between items-center shadow-md">
      <Link to="/" className="text-xl font-semibold">User Dashboard</Link>
      <div className="space-x-8 text-xl">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/add-user" className="hover:underline">Add User</Link>
      </div>
    </nav>
  );
};

export default Navbar;
