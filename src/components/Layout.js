import React from "react"
import Navigation from "../components/Navigation"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigator from "../components/Navigator"
import Logo from "../components/Logo"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import styled from "styled-components"

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
  top: 5px;
  background-color: transparent;
`
export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Navigator />

      <Container fluid>
        <Row>
          <Col>
            <Link to="/" className="d-none d-sm-inline-block">
              <Logo />
            </Link>

            <Span>
              <Link to="/menu/" className="bg_slider d-none d-sm-inline-block">
                MENU
              </Link>
            </Span>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{ marginTop: "30px", paddingLeft: "80px" }}
        className="no-gutters"
      >
        {children}
      </Container>
    </div>
  )
}
