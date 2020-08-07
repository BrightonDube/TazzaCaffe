import React from "react"
import styled from "styled-components"
import MenuToggler from "./MenuToggler"
import Logo from "../components/Logo"

const Navbar = styled.div`
  background: #59981a;
  width: 100%;
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
    <div className="d-xs-block d-sm-none">
      <Navbar>
        <Logo className="logo mx-auto" />
        <MenuToggler></MenuToggler>
      </Navbar>
    </div>
  )
}
