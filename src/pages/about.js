import React from "react"
import Layout from "../components/Layout"
import { Row, Col } from "react-bootstrap"
import video from "../images/Making Coffee Montage Video - Sony A7s Metabones Test Footage Canon 50mm 1.4 + Macro Lens.mp4"
export default function About() {
  return (
    <Layout>
      <Row className="no-gutters">
        <Col xs={12} sm={5} className="px-4">
          <h1>About Us!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            itaque temporibus totam alias nam? Expedita minus esse atque
            dignissimos iure blanditiis? Fugiat qui earum voluptas accusamus
            iusto totam magnam doloribus!\
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            itaque temporibus totam alias nam? Expedita minus esse atque
            dignissimos iure blanditiis? Fugiat qui earum voluptas accusamus
            iusto totam magnam doloribus!\
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            itaque temporibus totam alias nam? Expedita minus esse atque
            dignissimos iure blanditiis? Fugiat qui earum voluptas accusamus
            iusto totam magnam doloribus!\
          </p>
        </Col>
        <Col xs={12} sm={7}>
          <video
            className="video-fluid w-100"
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          >
            <source src={video} type="video/mp4" />
          </video>
        </Col>
      </Row>
    </Layout>
  )
}
