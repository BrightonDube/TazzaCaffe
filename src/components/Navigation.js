import React from "react"
import styled from "styled-components"
import MenuToggler from "./MenuToggler"
import Logo from "../components/Logo"

const Navbar = styled.div`
  background: #59981a;
  max-width: 100vw;
  height: 60px;
  position: absolute;
  z-index: 6;
  top: 0;
  left: 0;
  .logo {
    background: transparent !important;
  }
`

export default function Navigation() {
  return (
    <Navbar className="d-xs-block d-sm-none">
      <Logo className="logo mx-auto" />
      <MenuToggler></MenuToggler>
    </Navbar>
  )
}
