import React, { useState } from "react"
import Layout from "../components/Layout"
import Social from "../components/Social"
import { Row, Col, Form, Button } from "react-bootstrap"

export default function Contact() {
  const [validated, setValidated] = useState(false)
  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  return (
    <Layout>
      <Row className="no-gutters">
        <Col className="col-12 col-sm-5 text-center align-self-center">
          <h1>Contact</h1>
          <h5>Address</h5>
          <p>4 Walton Street.</p>
          <p>WashingtonDC, DC 00000</p>
          <h5>Email</h5>
          <p>info@tazzacafe.com</p>
          <h5>Phone</h5>
          <p>123-456-7890</p>
          <Social />
        </Col>
        <Col className="col-12 col-sm-7 align-self-center p-5">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue="Mark"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue="Otto"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" required />
                <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address!
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Form.Group>
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </Col>
      </Row>
    </Layout>
  )
}
