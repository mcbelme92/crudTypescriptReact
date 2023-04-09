import React from "react";
import { Button, Nav } from "react-bootstrap";
/* import { Link, useLocation } from "react-router-dom"; */
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <div className="container">
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Button variant="dark">Agregar</Button>
          {/* {location.pathname != "/" ? null : (
          <Link to={"/add/"}>
            <Button variant="dark">Agregar</Button>
          </Link>
        )} */}
        </Nav.Item>
      </Nav>
    </div>
  );
};
