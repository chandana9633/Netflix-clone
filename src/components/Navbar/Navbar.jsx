import { useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

import search from "../../assets/search-icon.png";
import notification from "../../assets/notification-icon.jpg";
import profile from "../../assets/profile-img.png";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="nav">
      {/* LEFT SIDE */}
      <div className="nav-left">
        <h1 className="logo">NETFLIX</h1>

        <ul className="nav-links">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        <img src={search} alt="Search" className="icon-img" />
        <img src={notification} alt="Notifications" className="icon-img" />

        {/* PROFILE DROPDOWN */}
        <div
          className="navbar-profile"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img src={profile} alt="Profile" className="profile-img" />

          {showDropdown && (
            <div className="dropdown">
              <p onClick={handleLogout}>Sign Out of Netflix</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;