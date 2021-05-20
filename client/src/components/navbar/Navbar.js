import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/products">dealStore</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
