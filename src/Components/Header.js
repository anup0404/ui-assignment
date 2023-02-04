import { Button } from "@mui/material";
import React from "react";
import "./Header.css";
function Header() {
  return (
    <>
      <div className="header_container">
        <div className="header_container_left">
          <h2>Coading Masters</h2>
        </div>
        <div className="header_container_right">
          <Button style={{ border: "none", color: "white" }} variant="outlined">
            Home
          </Button>
          <Button style={{ border: "none", color: "white" }} variant="outlined">
            Blog
          </Button>
          <Button style={{ border: "none", color: "white" }} variant="outlined">
            Courses
          </Button>
          <Button style={{ border: "none", color: "white" }} variant="outlined">
            Contact Us
          </Button>
          <Button style={{ border: "none", color: "white" }} variant="outlined">
            Login/Singup
          </Button>
        </div>
      </div>
    </>
  );
}

export default Header;
