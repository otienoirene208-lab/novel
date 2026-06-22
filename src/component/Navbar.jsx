import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaBookOpen, FaSearch } from "react-icons/fa";


const Navbar = () => {
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);

  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow-lg px-4"
      style={{
        background:
          "linear-gradient(135deg,#111827,#312e81)",
        backdropFilter:"blur(15px)"
      }}
    >

      {/* Logo */}
      <NavLink
        to="/"
        className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-3 text-warning"
      >
        <FaBookOpen/>
        NovelNest
      </NavLink>


      <button
        className="navbar-toggler bg-light"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        ☰
      </button>


      <div className="collapse navbar-collapse" id="menu">

        <ul className="navbar-nav mx-auto gap-3">

       
          <li>
            <NavLink className="nav-link text-light fw-bold" to="/categories">
              Categories
            </NavLink>
          </li>



          <li>
            <NavLink className="nav-link text-light fw-bold" to="/contact">
              Contact
            </NavLink>
          </li>


        </ul>


        {/* Search */}
        <div className="d-flex me-3">
          <div className="input-group">
            <input
              className="form-control rounded-start-pill"
              placeholder="Search books..."
            />

            <button className="btn btn-warning rounded-end-pill"
          >
              <FaSearch/>
            </button>

          </div>
        </div>



        {/* Cart */}
        <NavLink
          to="/cart"
          className="btn btn-outline-warning rounded-pill position-relative me-3"
        >
          <FaShoppingCart size={20}/>

          <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartCount}
          </span>

        </NavLink>



        {user ? (

        <>
        <div className="text-light me-3">
          <FaUserCircle size={25}/>
          {" "}
          {user.username}
        </div>


        <button
        onClick={handleLogout}
        className="btn btn-danger rounded-pill">
          Logout
        </button>

        </>

        ) : (

        <>
        <NavLink
        to="/signin"
        className="btn btn-outline-light rounded-pill me-2">
          Sign In
        </NavLink>


        <NavLink
        to="/signup"
        className="btn btn-warning rounded-pill">
          Sign Up
        </NavLink>

        </>

        )}

      </div>

    </nav>
  );
};


export default Navbar;