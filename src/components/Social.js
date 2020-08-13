import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Wrapper = styled.div`
  a {
    color: #085158;
  }
  #facebook:hover {
    color: #3b5998;
  }
  #instagram:hover {
    color: #3f729b;
  }
  #twitter:hover {
    color: #00acee;
  }
`
export default function Social() {
  return (
    <Wrapper>
      <a href="https//:facebook.com/tazzacafe" className="mr-5" id="facebook">
        <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
      </a>
      <a href="https//:instagram.com/tazzacafe" className="mr-5" id="instagram">
        <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
      </a>
      <a href="https//:twitter.com/tazzacafe" className="mr-5" id="twitter">
        <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
      </a>
    </Wrapper>
  )
}
