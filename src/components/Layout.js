import React from "react"
import Navigation from "../components/Navigation"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigator from "../components/Navigator"
import Logo from "../components/Logo"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "gatsby"
import styled from "styled-components"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Social from "../components/Social"

library.add(fab, faEnvelope)

const year = new Date().getFullYear()
const Span = styled.span`
  position: absolute;
  cursor: pointer;
  font-family: "Montserrat";
  font-weight: bold;
  font-size: 1.5rem;
  margin-left: 8px;
  display: inline-block;
  text-decoration: none;
  z-index: 6;
  top: 10px;
  background-color: transparent;
`
const Wrapper = styled.div`
  .container-fluid {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  @media only screen and (min-width: 575px) {
    .pl-sm-6 {
      padding-left: 60px !important;
    }
  }
  .row {
    margin: 0 !important;
    padding: 0 !important;
  }

  .menu-point {
    list-style: none;
    text-decoration: none;
    color: #245259;
    font-size: 1rem;
    padding: 0.5rem;
    background-size: 100% 200%;
    background-image: linear-gradient(to bottom, #94cdd5 50%, #d58844 50%);
    -webkit-transition: background-position 1s;
    -moz-transition: background-position 1s;
    transition: background-position 1s;
    transition: background-position 0.3s cubic-bezier(0.47, 0.1, 1, 0.63),
      color 0.2s linear;
    transition-delay: 0s, 0.15s;
  }
  .menu-point:hover {
    background-position: 0% 100%;
  }

  .footer {
    background: #94cdd5;
    color: #245259;
    a {
      color: #245259;
    }
  }
  .newsletter {
    background: #e39e0d;
    color: #fff;
  }
`
export default function Layout({ children }) {
  return (
    <Wrapper>
      <Navigation />
      <Navigator />

      <Container fluid>
        <Row>
          <Col style={{ backgroundColor: "#94CDD5" }}>
            <Link to="/" className="d-none d-sm-inline-block">
              <Logo />
            </Link>

            <Span>
              <Link to="/menu/" className="menu-point d-none d-sm-inline-block">
                MENU
              </Link>
            </Span>
          </Col>
        </Row>
      </Container>
      <Container fluid className="pl-sm-6 pt-5 mt-2 pt-sm-0 mt-sm-0">
        {children}
        <Row className="no-gutters newsletter">
          <Col className="mx-auto my-5 col-md-8 text-center align-self-center">
            <h1>
              Sign up for our Newsletter and never miss out on any of our
              promos.
            </h1>
            <Button variant="success" className="px-5">
              Sign Up
            </Button>
          </Col>
        </Row>
        <Row className="no-gutters footer">
          <Col xs={12} sm={6} className="my-5 text-center align-self-center">
            <span className="menu-point">&copy; {year} </span>
            <Link to="/" className="menu-point">
              Home
            </Link>
            <Link to="/about/" className="menu-point">
              About
            </Link>
            <Link to="/menu/" className="menu-point">
              Menu
            </Link>
            <Link to="/order/" className="menu-point">
              Order Online
            </Link>
          </Col>
          <Col
            xs={12}
            sm={6}
            className="my-5 px-3 text-right align-self-center"
          >
            <Social />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}
