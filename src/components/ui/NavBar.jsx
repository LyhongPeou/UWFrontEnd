import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  return (
    <div className="navbar bg-accent">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-white">

            <li><NavLink to="./student_management">Students</NavLink></li>
            <li><NavLink to="./document_mangement">Documents</NavLink></li>
            <li><NavLink to="./setting">Setting</NavLink></li>
          </ul>
        </div>
        <NavLink className="btn btn-ghost normal-case text-xl text-white text-[20px] mr-3" to="./dashboard">My Dashboard</NavLink>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white text-[20px]">
            <li className="mr-4"><NavLink to="./student_management">Students</NavLink></li>
            <li className="mr-4"><NavLink to="./document_mangement">Documents</NavLink></li>
          </ul>
        </div>
      </div>

      <div className="navbar-end ">

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white text-[20px]">
            <li>
            <NavLink to="/setting">
              <FontAwesomeIcon icon={faCog} />
            </NavLink>
            </li>
          </ul>

        </div>

        <Link to="/">
          <button className="btn bg-secondary text-white text-[20px]">
              <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
        </Link>
      </div>
    </div>
  )
};

export default NavBar;