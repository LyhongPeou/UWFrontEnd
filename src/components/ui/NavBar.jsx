import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="w-full py-5 flex items-center fixed top-0 z-20 bg-white shadow-md">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4">
        <ul className="flex space-x-6">
          <li className="cursor-pointer hover:text-blue-500"><Link to="./dashboard">My Dashboard</Link></li>
          <li className="cursor-pointer hover:text-blue-500">
            <Link to="./student_management">Student Management</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            <Link to="./document_mangement">Document Management</Link>
          </li>
        </ul>
        <ul className="flex space-x-6">
          <li className="cursor-pointer hover:text-blue-500"><Link to="./Setting">Settings</Link></li>
          <li className="cursor-pointer hover:text-blue-500">Logout</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;