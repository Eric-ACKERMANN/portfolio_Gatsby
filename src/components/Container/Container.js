import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 0 var(--container-padding);
`
export default ({ children }) => {
  return <Container>{children}</Container>
}
