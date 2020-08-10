import React from "react"
import Layout from "../components/Layout" // highlight-line
import { Container, Row, Col, Carousel } from "react-bootstrap"
import image from "../images/italian-cuisine-2378729_640.jpg"
import video from "../images/Insomnia - Restaurant Promo Video.mp4"

export default function Home() {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col xs={12} md={8} className="">
            {/* <img src={image} alt="home" className="img-fluid" /> */}
            <video
              className="w-100"
              playsinline="playsinline"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
            >
              <source src={video} type="video/mp4" />
            </video>
          </Col>
          <Col className="text-center align-self-center col-12 col-md-4 order-xs-last order-sm-first">
            <h1>The Home of Fresh Food</h1>
            <h3 className="text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              ratione repellendus doloribus quo.
            </h3>
          </Col>
        </Row>
        <Row>
          <Col className="text-center col-12 col-md-4 order-last">
            <h1>The Home of Fresh Food</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              ratione repellendus doloribus quo, in commodi voluptatum provident
              doloremque consequatur possimus sapiente. Veritatis excepturi,
              error libero ex ad consequatur voluptates dolor?
            </p>
          </Col>
          <Col xs={12} lg={8}>
            <img src={image} alt="home" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
