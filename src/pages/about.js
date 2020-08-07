import React from "react"
import Navigation from "../components/Navigation"
import Navigator from "../components/Navigator"
import { Row, Col } from "react-bootstrap"
import Logo from "../components/Logo"

export default function About() {
  return (
    <div>
      <Navigation />
      <Navigator />
      <Row>
        <Col style={{ alignItems: "center" }}>
          <Logo className="d-none d-sm-block"></Logo>
        </Col>
      </Row>
    </div>
  )
}
