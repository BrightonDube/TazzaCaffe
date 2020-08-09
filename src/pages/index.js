import React from "react"
import Layout from "../components/Layout" // highlight-line
import { Row, Col } from "react-bootstrap"
import image from "../images/italian-cuisine-2378729_640.jpg"

export default function Home() {
  return (
    <Layout>
      <Row>
        <Col className="text-center col-4">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          fugit tempora natus nobis molestias delectus esse beatae obcaecati.
          Perferendis ad quo facilis illum harum autem vitae exercitationem
          eaque tempora voluptates.
        </Col>
      </Row>
    </Layout>
  )
}
