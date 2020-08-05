import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

export default function Navigation() {
  return (
    <div className="d-xs-block d-sm-none">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="custom"
        variant="dark"
        style={{
          backgroundColor: "#7fc03d",
        }}
      >
        <Navbar.Brand>
          <Link className="navbar-brand" to="/">
            Tazza Caffe
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link
                to="/"
                className="nav-link"
                activeClassName="active"
                activeStyle={{ fontSize: "1.1rem", color: "white" }}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/about"
                className="nav-link"
                activeStyle={{ fontSize: "1.1rem", color: "white" }}
                activeClassName="active"
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/contact"
                className="nav-link"
                activeClassName="active"
                activeStyle={{ fontSize: "1.1rem", color: "white" }}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
