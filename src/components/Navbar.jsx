import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="navbar_section">
      <div>
        <h1>
          <span>API</span>News
        </h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </section>
  );
};

export default Navbar;
