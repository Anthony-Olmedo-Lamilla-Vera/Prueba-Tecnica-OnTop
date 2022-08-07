import { Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Linked({ param, title }) {
  let Navegar = useNavigate();

  const NavigatePage = (path) => {
    Navegar(path);
  };

  return (
    <Dropdown.Item onClick={() => NavigatePage("/detail?type=" + param)}>
      {title}
    </Dropdown.Item>
  );
}

function Header() {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Marvel_Studios_logo.svg/2560px-Marvel_Studios_logo.svg.png"
          className="mr-3 h-14 "
          alt="Flowbite Logo"
        />
      </Navbar.Brand>

      <Dropdown arrowIcon={true} inline={true} label="Filtrar por">
        <Linked param={"characters"} title="Characters" />

        <Linked param={"series"} title="Series" />
      </Dropdown>
    </Navbar>
  );
}

export default Header;
