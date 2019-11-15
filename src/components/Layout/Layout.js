import React from "react"
import Navigator from "../Navigator"
import Footer from "../Footer"
import styled from "styled-components"

export default ({ children, navIsDeployed, setNavSmall }) => (
  <StyledLayout>
    <Navigator navIsDeployed={navIsDeployed} setNavSmall={setNavSmall} />
    {children}
    <Footer />
  </StyledLayout>
)

const StyledLayout = styled.div`
  max-width: var(--layout-max-width);
  margin: 0 auto;
`
