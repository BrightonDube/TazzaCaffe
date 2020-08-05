import React from "react"
import { Button } from "react-bootstrap"
import Navigation from "../components/Navigation"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Home() {
  return (
    <div>
      <Navigation></Navigation>
      <h1>This is a heading</h1>
      <Button css>Click me!</Button>
    </div>
  )
}
