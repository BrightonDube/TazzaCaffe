import React from "react"
import Layout from "../components/Layout" // highlight-line
import { Container, Row, Col, Carousel } from "react-bootstrap"
import image1 from "../images/fried-eggs-846367_640.jpg"
import image2 from "../images/bread-2178874_640.jpg"
import image3 from "../images/close-up-1854245_640.jpg"
import image4 from "../images/meal-918638_640.jpg"
import video from "../images/Insomnia - Restaurant Promo Video.mp4"

export default function Home() {
  return (
    <Layout>
      <Container fluid>
        <Row className="no-gutters">
          <Col xs={12} md={8}>
            <video
              className="w-100 video-fluid"
              playsinline="playsinline"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
            >
              <source src={video} type="video/mp4" />
            </video>
          </Col>
          <Col className="p-4 text-center align-self-center col-12 col-md-4 order-xs-last order-sm-first">
            <h1>The Home of Fresh Food</h1>
            <h3 className="text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              ratione repellendus doloribus quo.
            </h3>
          </Col>
        </Row>
        <Row
          className="no-gutters"
          style={{ backgroundColor: "#3A7A82", color: "#F6CA9D" }}
        >
          <Col className="text-center p-4 col-12 col-md-4 order-last align-self-center">
            <h1>The Home of Fresh Food</h1>
            <h4>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              ratione repellendus doloribus quo, in commodi voluptatum provident
              doloremque consequatur possimus sapiente.
            </h4>
          </Col>
          <Col xs={12} lg={8}>
            <Carousel fade interval={1000} indicators={false}>
              <Carousel.Item>
                <img className="d-block w-100" src={image3} alt="First slide" />
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
      </Container>
    </Layout>
  )
}
