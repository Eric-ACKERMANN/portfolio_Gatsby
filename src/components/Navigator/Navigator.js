import React from "react"
import LinkSmooth from "../reactComponent/LinkSmooth"
import { FaTimes, FaBars } from "react-icons/fa"
import styled from "styled-components"
import Container from "../Container/Container"

export default function Navigator({ navIsDeployed, setNavSmall }) {
  const listOfLink = (
    <StyledUl>
      <StyledLi>
        <LinkSmooth id="aboutMe" text="ABOUT ME" />
      </StyledLi>
      <StyledLi>
        <LinkSmooth id="projects" text="PROJECTS" />
      </StyledLi>
      <StyledLi>
        <LinkSmooth id="skills" text="SKILLS" />
      </StyledLi>
      <StyledLi>
        <LinkSmooth id="contact" text="CONTACT" />
      </StyledLi>
    </StyledUl>
  )

  return (
    <nav>
      <StyledNavBar>
        <Container>
          <StyledNavBarElement>
            <span>Light</span> / <span>Dark</span>
          </StyledNavBarElement>

          <StyledNavBarElement>
            <span>Français</span> / <span>English</span>
          </StyledNavBarElement>

          {navIsDeployed ? (
            <FaTimes onClick={() => setNavSmall()} />
          ) : (
            <FaBars onClick={() => setNavSmall()} />
          )}
        </Container>
      </StyledNavBar>
      {navIsDeployed && <StyledDeployedMenu>{listOfLink}</StyledDeployedMenu>}
    </nav>
  )
}

const StyledNavBar = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: var(--bgc-main);
  color: var(--color-second);
`

const StyledNavBarElement = styled.span`
  margin-right: 1rem;
`

const StyledDeployedMenu = styled.div`
  background-color: var(--bgc-main);
  position: absolute;
  width: 100%;
`

const StyledUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledLi = styled.li`
  padding: 10px;
  border-radius: 10px;

  a {
    color: var(--bgc-second);
  }

  :hover {
    background-color: var(--bgc-second);
  }

  :hover a {
    color: var(--bgc-main);
  }
`
