import React from "react"
import Project from "../Project"
import { projects } from "../../constantes/project"
import styled from "styled-components"
import Container from "../Container"
import Subtitle from "../Section_SubTitle"
import Skill from "../Skill"
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { DiMongodb } from "react-icons/di"

export default () => {
  return (
    <div>
      <Container>
        <Subtitle>Projets</Subtitle>
        <StyledFilter>
          <Skill text="No Filter" theme="var(--color-second)" />
          <Skill logo={<FaHtml5 />} text="HTML" theme="#e34c26" />
          <Skill logo={<FaCss3Alt />} text="CSS" theme="#264de4" />
          <Skill
            logo={<IoLogoJavascript />}
            text="JavaScript"
            theme="#f0db4f"
          />
          <Skill logo={<FaNodeJs />} text="NodeJs" theme="#44883d" />
          <Skill logo={<FaReact />} text="ReactJs" theme="#61dbfb" />
          <Skill logo={<FaReact />} text="React Nativ" theme="#4267b2" />
          <Skill logo={<DiMongodb />} text="MongoDB" theme="#11AA52" />
        </StyledFilter>

        <StyledProjects>
          {projects.map((element, index) => {
            return <Project project={element} key={index} />
          })}
        </StyledProjects>
      </Container>
    </div>
  )
}

const StyledProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const StyledFilter = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
