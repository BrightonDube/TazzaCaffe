import React from "react"
import styled from "styled-components"
import { Col, Row, Card } from "react-bootstrap"
import image1 from "../images/fried-eggs-846367_640.jpg"
import image2 from "../images/bread-2178874_640.jpg"
import image3 from "../images/close-up-1854245_640.jpg"
import image4 from "../images/meal-918638_640.jpg"
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
  .menu-container {
    padding-left: 0;
    margin-left: 16px;
    max-width: 400px;
  }
  .menu-list {
    list-style: none;
    color: #085158;
    font-size: 2.5rem;
    padding: 1rem;
  }
  .menu-list > a {
    color: inherit;
    text-decoration: none;
    transition: color 0.4s ease;
    font-weight: bolder;
  }

  .img-hover {
    -webkit-transition: all 0.3s ease; /* Safari and Chrome */
    -moz-transition: all 0.3s ease; /* Firefox */
    -o-transition: all 0.3s ease; /* IE 9 */
    -ms-transition: all 0.3s ease; /* Opera */
    transition: all 0.3s ease;
    position: relative;
  }
  .img-hover:hover {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1.2); /* Safari and Chrome */
    -moz-transform: scale(1.2); /* Firefox */
    -ms-transform: scale(1.2); /* IE 9 */
    -o-transform: translatZ(0) scale(1.2); /* Opera */
    transform: translatZ(0) scale(1.2);
  }

  .img-hover:hover:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 30px;
    height: 30px;
    border: 1px solid #000;
  }
`
export default function Menu2() {
  return (
    <Wrapper className="menu">
      <Row>
        <Col
          sm={{ span: 5, order: "last" }}
          className="pt-5 mt-3 mt-sm-0 pt-sm-0"
        >
          <Row>
            <Col className="m-0 p-0 text-center">
              <Card>
                <Link to="/menu/" className="remove-style">
                  <Card.Img variant="top" src={image4} />
                  <Card.Footer className="m-0 p-0">
                    <h1 className="menu-text m-0">MENU</h1>
                  </Card.Footer>
                </Link>
              </Card>
            </Col>
            <Col className="m-0 p-0 text-center">
              <Card>
                <Link to="/about/" className="remove-style">
                  <Card.Img variant="top" src={image3} />
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
                  <Card.Img variant="top" src={image2} className="img-hover" />

                  <Card.Footer className="m-0 p-0">
                    <h1 className="menu-text m-0">MENU</h1>
                  </Card.Footer>
                </Link>
              </Card>
            </Col>
            <Col className="m-0 p-0 text-center">
              <Card>
                <Link to="/about/" className="remove-style">
                  <Card.Img variant="top" src={image1} />
                  <Card.Footer className="m-0 p-0">
                    <h1 className="menu-text m-0">ORDER</h1>
                  </Card.Footer>
                </Link>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col className="menu-items">
          <ul className="menu-container">
            <li className="bg_slider menu-list">
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li className="menu-point menu-list">
              <Link to="/menu/" activeClassName="active">
                Menu
              </Link>
            </li>
            <li className="menu-point menu-list">
              <Link to="/about/" activeClassName="active">
                About
              </Link>
            </li>
            <li className="bg_slider menu-list">
              <Link to="/contact/" activeClassName="active">
                Contact
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col xs={{ offset: "1" }} style={{ backgroundColor: "red" }}>
          Social media
        </Col>
      </Row>
    </Wrapper>
  )
}
