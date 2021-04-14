import { NavLink } from "react-router-dom";
import { HeaderWrapper, Logo, Menu, MenuIcon } from "./Header.styles";
import "./Header.scss";

export const Header = () => {
  return (
    <>
      <HeaderWrapper className="header">
        <Logo href="" className="logo">
          CSS Nav
        </Logo>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <MenuIcon className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </MenuIcon>
        <Menu className="menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </Menu>
      </HeaderWrapper>
    </>
  );
};
