import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Wrap = styled.div`
  width: 140px;
  margin-left: 70px;
  display: inline-block;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
  z-index: 6;
`
export default function Logo() {
  return (
    <Wrap>
      <img src={logo} alt="Logo" className="w-100 img-fluid" />
    </Wrap>
  )
}
