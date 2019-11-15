import React from "react"
import styled from "styled-components"
import Container from "../Container"

export default () => {
  return (
    <div>
      <Container>
        <Title>Eric Ackermann</Title>
        <Subtitle>Développeur JavaScript Full-Stack</Subtitle>
        <Description>Spécialisé en ReactJS - React Nativ - NodeJs</Description>
      </Container>
    </div>
  )
}

const Title = styled.h1`
  color: var(--color-white);
  font-weight: 500;
  font-size: 2.2rem;
`

const Subtitle = styled.h3`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  color: var(--color-sixth);
`

const Description = styled.h3`
  font-size: 1.3rem;
  color: var(--color-sixth);
`
