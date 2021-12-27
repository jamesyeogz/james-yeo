import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"; 
import React from "react";
import "./components.css";
import { Link as LinkR } from "react-router-dom"; 
import { Link as LinkS } from "react-scroll";

const Navbar = (props) => { 
  const Light = props.Light;
  const handleLight = props.handleLight;
  return (
    <div className="navbar navbar-container"> 
      <div className="navbar-menu">
        <h1>James Yeo </h1> 
      </div>

      <div className="navbar-drawer" style={{ color: "black" }}>
        <IconButton
          aria-label="Light/Dark Theme"
          icon={Light ? <SunIcon /> : <MoonIcon />}
          onClick={handleLight}
        />
        <div style={{ width: "10px", height: "auto" }}></div>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Menu"
            icon={<HamburgerIcon />}
            variant="outline"
            background="white"
          />
          <MenuList>
            <MenuItem>
              <LinkR className="link-scroll" to="/">
                Home
              </LinkR>
            </MenuItem>
            <MenuItem>
              <LinkS className="link-scroll" to="Case Studies">
                Case Studies
              </LinkS>
            </MenuItem>
            <MenuItem>
              <LinkR className="link-scroll" to="/Internships">
                Internships
              </LinkR>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
