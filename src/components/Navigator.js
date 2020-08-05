import React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"
import { Helmet } from "react-helmet"

const Navbar = styled.div`
  font-family: "Roboto";
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 100vh;
  background-color: #7fc03d;
`
export default function Navigator() {
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Helmet>
        <script src="../javascript/custom.js" type="text/javascript" />
      </Helmet>
      <Navbar className="d-none d-sm-block"></Navbar>

      <Container>This is roboto?</Container>
    </div>
  )
}
