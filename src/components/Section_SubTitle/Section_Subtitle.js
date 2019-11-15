import React from "react"
import styled from "styled-components"

export default ({ children }) => <StyledSubtitle>{children}</StyledSubtitle>

const StyledSubtitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 0;
  ::before {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      var(--color-main),
      var(--color-second),
      var(--color-main)
    );
    margin: 15px auto 15px auto;
  }
  ::after {
  }
`
