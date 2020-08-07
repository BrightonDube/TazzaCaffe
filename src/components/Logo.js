import React from "react"
import styled from "styled-components"

const Div = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  font-family: "Kaushan Script";
  font-size: 2rem;
  color: #ecf87f;
`
export default function Logo() {
  return <Div className="logo-text">TazzaCaffe</Div>
}
