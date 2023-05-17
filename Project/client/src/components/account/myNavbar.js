import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ".//../../CSS/navbar.css";
import { getListItemSecondaryActionClassesUtilityClass } from "@mui/material";

const MyNavbar = (props) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-info" href="/account">
          <span className="">My Account</span>
        </a>
        <div
          id="navbarToggleExternalContent"
        >
          <a className="nav-link text-info" href="/account">
            {" "}
            Profile{" "}
          </a>
          <a className="nav-link text-info" href="/account/mine">
            {" "}
            My Listings{" "}
          </a>
        </div>
      </nav>
    );
  };

export default MyNavbar;

//See: https://johnotu.medium.com/how-to-toggle-bootstrap-navbar-collapse-button-in-react-without-jquery-1d5c2fb0751c
