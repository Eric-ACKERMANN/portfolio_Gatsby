import React from "react"
import styled from "styled-components"

export default ({ logo, text, theme }) => (
  <StyledSkill theme={theme}>
    <StyledLogo>{logo}</StyledLogo>
    <span>{text}</span>
  </StyledSkill>
)

const StyledLogo = styled.span`
  margin-right: 5px;
`

const StyledSkill = styled.div`
  display: flex;
  font-size: 1rem;
  align-items: center;
  color: var(--color-white);
  padding: 5px 10px;
  margin: 5px 5px 5px 0px;
  line-height: 15px;

  border: ${props => props.theme} solid 1px;

  color: ${props => props.theme};
  background-color: var(--second-color);
  transition: all 0.3s;

  :hover {
    cursor: pointer;
    background-color: ${props => props.theme};
    color: var(--color-white);
    transition: all 0.3s;
  }
`
