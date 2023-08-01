import Title from "./Title";
import Userlogo from "./Userlogo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-400 shadow-sm">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Title />
        <div className="mr-auto ml-auto">
          <ul className="p-2 m-2 flex flex-wrap justify-center">
            <li className="p-2 m-2">
              <Link to="/" className="text-white hover:text-green-200">
                Home
              </Link>
            </li>
            <li className="p-2 m-2">
              <Link to="/new" className="text-white hover:text-green-200">
                Add a New Note
              </Link>
            </li>
            <li className="p-2 m-2">
              <Link to="/about" className="text-white hover:text-green-200">
                About Us
              </Link>
            </li>
            <li className="p-2 m-2">
              <Link to="/contactus" className="text-white hover:text-green-200">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <Userlogo />
      </div>
    </nav>
  );
};

export default Header;
