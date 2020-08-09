import React from "react"
import Layout from "../components/Layout" // highlight-line
import { Row, Col } from "react-bootstrap"
import image from "../images/italian-cuisine-2378729_640.jpg"

export default function Home() {
  return (
    <Layout>
      <Row>
        <Col className="text-center col-12 col-md-4">
          <h1>The Home of Fresh Food</h1>
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
            ratione repellendus doloribus quo, in commodi voluptatum provident
            doloremque consequatur possimus sapiente.
          </h3>
        </Col>
        <Col xs={12} md={8}>
          <img src={image} alt="home" className="img-responsive" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center col-12 col-md-4">
          <h1>The Home of Fresh Food</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
            ratione repellendus doloribus quo, in commodi voluptatum provident
            doloremque consequatur possimus sapiente. Veritatis excepturi, error
            libero ex ad consequatur voluptates dolor?
          </p>
        </Col>
        <Col xs={12} lg={8}>
          <img src={image} alt="home" className="img-responsive" />
        </Col>
      </Row>
    </Layout>
  )
}
