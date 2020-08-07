import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const H1 = styled.h1`
  width: 140px;
  font-family: "Kaushan Script";
  font-size: 2rem;
  color: #ecf87f;
  margin-left: 70px;
  display: inline-block;
`
export default function Logo() {
  return <H1 className="logo-text">TazzaCaffe</H1>
}
