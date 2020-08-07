import React from "react"
import styled from "styled-components"
import { Col, Row, Card } from "react-bootstrap"

import { Link } from "gatsby"

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  .menu-items {
    width: 100%;
    padding-left: 60px;
    padding-top: 60px;
    display: inline-block;
  }
  .menu-text {
    font-size: 3rem;
    font-weight: bolder;
    background: #63a521;
    color: #ecf87f;
  }
  .remove-style {
    text-decoration: none;
  }
`
export default function Menu2() {
  return (
    <Wrapper className="menu">
      <Row>
        <Col
          sm={{ span: 6, order: "last" }}
          md={7}
          className="pt-5 mt-3 mt-sm-0 pt-sm-0"
        >
          <Row>
            <Col className="m-0 p-0 text-center">
              <Card>
                <Link to="/menu/" className="remove-style">
                  <Card.Img
                    variant="top"
                    src="https://www.snoozeeatery.com/wp-content/uploads/2019/08/breakfast.jpg"
                  />
                  <Card.Footer className="m-0 p-0">
                    <h1 className="menu-text m-0">MENU</h1>
                  </Card.Footer>
                </Link>
              </Card>
            </Col>
            <Col className="m-0 p-0 text-center">
              <Card>
                <Link to="/about/" className="remove-style">
                  <Card.Img
                    variant="top"
                    src="https://www.snoozeeatery.com/wp-content/uploads/2020/03/Order-Online-1.jpg"
                  />
                  <Card.Footer className="m-0 p-0">
                    <h1 className="menu-text m-0">ORDER</h1>
                  </Card.Footer>
                </Link>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="m-0 p-0 text-center">
              <Card>
                <Link to="/menu/" className="remove-style">
                  <Card.Img
                    variant="top"
                    src="https://www.snoozeeatery.com/wp-content/uploads/2019/08/breakfast.jpg"
                  />
                  <Card.Footer className="m-0 p-0">
                    <h1 className="menu-text m-0">MENU</h1>
                  </Card.Footer>
                </Link>
              </Card>
            </Col>
            <Col className="m-0 p-0 text-center">
              <Card>
                <Link to="/about/" className="remove-style">
                  <Card.Img
                    variant="top"
                    src="https://www.snoozeeatery.com/wp-content/uploads/2020/03/Order-Online-1.jpg"
                  />
                  <Card.Footer className="m-0 p-0">
                    <h1 className="menu-text m-0">ORDER</h1>
                  </Card.Footer>
                </Link>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col className="menu-items">
          <ul className="pl-3">
            <li className="bg_slider">
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li className="menu-point">
              <Link to="/menu/" activeClassName="active">
                Menu
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
      </Row>
      <Row>
        <Col xs={{ offset: "1" }}>Social media</Col>
      </Row>
    </Wrapper>
  )
}
