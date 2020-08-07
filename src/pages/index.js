import React from "react"
import Navigation from "../components/Navigation"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigator from "../components/Navigator"

export default function Home() {
  return (
    <div>
      <Navigation></Navigation>
      <Navigator />
    </div>
  )
}
