import React from "react"
import Layout from "../components/Layout"
import { Row, Col, Carousel, Button } from "react-bootstrap"
import image from "../images/1290/breakfast-1804457_1920.jpg"
import image1 from "../images/1290/asparagus-1307604_1920.jpg"
import image2 from "../images/1290/breakfast-690128_1920.jpg"
import image3 from "../images/1290/dish-918613_1920.jpg"
import image4 from "../images/1290/food-1209007_1920.jpg"

export default function Menu() {
  return (
    <Layout>
      <Row className="no-gutters">
        <Col xs={12} sm={6} className="p-5">
          <h1>Download Our Menu</h1>

          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <Button>Lunch Menu</Button>
        </Col>
        <Col xs={12} sm={6} style={{ backgroundColor: "#94CDD5" }}>
          <Carousel fade interval={1000} indicators={false}>
            <Carousel.Item>
              <img className="d-block w-100" src={image3} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image2} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image1} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={image4} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Layout>
  )
}
