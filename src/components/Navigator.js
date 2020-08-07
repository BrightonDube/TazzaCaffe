import React from "react"
import styled from "styled-components"
import MenuToggler from "../components/MenuToggler"

const Navbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 100vh;
  background-color: #7fc03d;
`
export default function Navigator() {
  return (
    <Navbar className="d-none d-sm-block">
      <MenuToggler />
    </Navbar>
  )
}
