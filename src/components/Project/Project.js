import React from "react"
import styled from "styled-components"

export default function Project({ project }) {
  const { image, title, type, catchPhrase, linkToSite, linkToRoute } = project
  return (
    <StyledCard>
      <StyledImage src={image} alt={title} />
      <StyledDescription>
        <h1>{catchPhrase}</h1>
        <span className="badge">{type}</span>
        <StyledButtonsLine>
          <button className="button-primary">
            <a href={linkToSite}>Link to the site</a>
          </button>
          <button className="button-secondary">
            <a href={linkToRoute}>Learn More..</a>
          </button>
        </StyledButtonsLine>
      </StyledDescription>
    </StyledCard>
  )
}

const StyledCard = styled.figure`
  width: 100%;
  overflow: hidden;
  height: fit-content;
  border-radius: 10px;
  margin-top: 20px;
  position: relative;

  :hover figcaption {
    visibility: visible;
    background-color: var(--color-sixth);
    color: var(--color-white);
  }

  :hover img {
    transform: scale(1.3);
    transition: transform 0.45s ease-in-out;
  }

  @media (min-width: 768px) {
    width: 48%;
  }
`

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  transition: transform 0.45s ease-in-out;
`

const StyledDescription = styled.figcaption`
  visibility: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 0px;
  width: 100%;
  height: 100%;
  transition: background-color 0.5s;
  color: var(--color-white);
  font-size: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
`

const StyledButtonsLine = styled.div`
  button {
    margin-top: 10px;
    font-size: 0.5rem;
  }

  button:nth-child(1) {
    margin-right: 0.2rem;
  }
`
