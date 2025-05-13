import React, { useEffect, useState } from "react";
import "../Navbar/Appbar.css";

// Material-UI Components
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../Assets/new-logo.png";
import profi from "../../Assets/ram2.jpg";
import { navLinks, navRight } from "../../Data/Data";
import {
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  Typography,
  Badge,
} from "@mui/material";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import cart icon

const Appbar = () => {
  const cartItems = useSelector((state) => state.cart.item); // Access cart items from Redux
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0); // Calculate total items in cart

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isNavlinksShowing, setIsNavlinksShowing] = useState(false);
  const [isNavShadow, setIsNavShadow] = useState(false);
  const settings = ["Profile", "Account", "Logout"];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsNavShadow(window.scrollY > 0);

      if (window.innerWidth < 1024) {
        setIsNavlinksShowing(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isNavShadow ? "nav navShadow" : "nav"}>
      <div className="container nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>

        {/* Navigation Links */}
        <ul
          className={`nav-links ${
            isNavlinksShowing ? "navlinksShow" : "navlinksHide"
          }`}
        >
          {navLinks.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="nav-right">
          {navRight?.management?.map((item, index) => (
            <Link key={index} className="management-icons" to={item.link}>
              {item.icon && <item.icon />}
            </Link>
          ))}

          {/* Cart Icon with Badge */}
          <Link to="/cart" className="management-icons">
            <Badge badgeContent={cartItemCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </Link>

          {/* Menu Toggle Button */}
          <button
            className="menu-button"
            onClick={() => setIsNavlinksShowing(!isNavlinksShowing)}
          >
            {isNavlinksShowing ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* User Avatar & Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src={profi || "/default-avatar.png"} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;