import React from "react"
import styled from "styled-components"
import { Container, Col, Row } from "react-bootstrap"
import Logo from "../components/Logo"
import { Link } from "gatsby"

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  .menu-items {
    width: 100%;
    padding-left: 80px;
    padding-top: 60px;
    display: inline-block;
  }
`
export default function Menu2() {
  return (
    <Wrapper className="menu">
      <Row className="logo">
        <Col>
          <Logo />
        </Col>
      </Row>
      <Row>
        <Col sm={6} lg={4} className="menu-items">
          <ul>
            <li className="bg_slider">
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li className="menu-point">
              <Link to="/about/" activeClassName="active">
                About
              </Link>
            </li>
            <li className="bg_slider">
              <Link to="/contact/" activeClassName="active">
                Contact
              </Link>
            </li>
          </ul>
        </Col>
        <Col>
          <Link to="/about/">
            <Row>
              <Col>
                <img
                  src="https://www.snoozeeatery.com/wp-content/uploads/2019/08/breakfast.jpg"
                  alt=""
                />
              </Col>
            </Row>
          </Link>
        </Col>
      </Row>
    </Wrapper>
  )
}
