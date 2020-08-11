//jshint esversion: 9
import React from "react"
import Layout from "../components/Layout"
import { Container, Row, Col, Carousel } from "react-bootstrap"
import image1 from "../images/fried-eggs-846367_640.jpg"
import image2 from "../images/bread-2178874_640.jpg"
import image3 from "../images/close-up-1854245_640.jpg"
import image4 from "../images/meal-918638_640.jpg"
import image5 from "../images/michael-browning-MtqG1lWcUw0-unsplash.jpg"
import video from "../images/Insomnia - Restaurant Promo Video.mp4"
import video2 from "../images/Making Coffee Montage Video - Sony A7s Metabones Test Footage Canon 50mm 1.4 + Macro Lens.mp4"
import video3 from "../images/MVI_5662__1_.mp4"

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
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
        <Row
          className="no-gutters"
          style={{ backgroundColor: "#95B34F", color: "#fff" }}
        >
          <Col className="col-12 col-md-6">
            <img src={image5} alt="" className="img-fluid" />
          </Col>
          <Col className="col-7 order-md-first col-md-4 text-center align-self-center ">
            <h1>Lorem Dolarem</h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              perspiciatis accusamus{" "}
            </h3>
          </Col>

          <Col
            className="col-5 col-md-2 text-center align-self-stretch order-md-last"
            style={{ backgroundColor: "#3D550C" }}
          >
            <h1>Lorem Dolarem</h1>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              perspiciatis accusamus{" "}
            </h4>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col xs={6} md={4} className="order-md-last">
            <video
              className="video-fluid w-100"
              playsinline="playsinline"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            >
              <source src={video3} type="video/mp4" />
            </video>
          </Col>

          <Col xs={6} md={4} className="order-md-first">
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
          <Col
            xs={12}
            md={4}
            className="text-center align-self-center text-warning"
          >
            <h1>Fresh from the Kitchen</h1>{" "}
            <h5>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati saepe beatae commodi labore, amet.
            </h5>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
