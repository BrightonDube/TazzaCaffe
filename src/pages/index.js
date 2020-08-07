import React from "react"
import Navigation from "../components/Navigation"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigator from "../components/Navigator"
import Logo from "../components/Logo"
import { Row, Col } from "react-bootstrap"
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
export default function Home() {
  return (
    <div>
      <Navigation />
      <Navigator />

      <Row>
        <Col>
          <Link to="/">
            <Logo className="d-none d-sm-inline-block" />
          </Link>

          <Span>
            <Link to="/menu/" className="bg_slider d-none d-sm-inline-block">
              MENU
            </Link>
          </Span>
        </Col>
      </Row>
    </div>
  )
}
