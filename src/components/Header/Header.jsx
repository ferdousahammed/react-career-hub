import { Link, NavLink } from "react-router-dom";

const links = (
  <>
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold" : "text-black"
        }
        to={"/"}
      >
        Home
      </NavLink>
    </li>
    {/* <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold" : "text-black"
        }
        to={"/jobs"}
      >
        Jobs
      </NavLink>
    </li> */}
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-bold" : "text-black"
        }
        to={"/applied"}
      >
        Applied Jobs
      </NavLink>
    </li>
    {/* <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-400" : "text-black"
        }
        to={"/blogs"}
      >
        Blogs
      </NavLink>
    </li> */}
  </>
);
const Header = () => {
  return (
    <div className="mx-[5%] lg:mx-[15.625%] relative">
      <div className="navbar absolute">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-xl lg:text-3xl font-extrabold">
            Career Hub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 px-1 font-medium">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="button-custom">Start Applying</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
