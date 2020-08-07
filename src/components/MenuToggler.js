import React from "react"
import "../styles/toggler.css"
import Menu2 from "./Menu2"

export default function MenuToggler() {
  return (
    <div className="menu-wrap">
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <Menu2 />
    </div>
  )
}
