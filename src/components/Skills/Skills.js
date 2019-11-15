import React from "react"
import Skill from "../Skill"
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import Carousel from "../Carousel"
import Subtitle from "../Section_SubTitle"
import Container from "../Container"

export default class Skills extends React.Component {
  state = { windowWidthLarge: false }
  handleWindowSize = () => {
    if (window.innerWidth > 540 && !this.state.windowWidthLarge) {
      this.setState({ windowWidthLarge: true })
    }
    if (window.innerWidth <= 540 && this.state.windowWidthLarge) {
      this.setState({ windowWidthLarge: false })
    }
  }
  render() {
    return (
      <div>
        <Container>
          <Subtitle>Skills</Subtitle>
          {this.state.windowWidthLarge ? (
            <Carousel>
              <Skill
                logo={<FaHtml5 />}
                text="HTML"
                theme="#e34c26"
                width="large"
              />
              <Skill
                logo={<FaCss3Alt />}
                text="CSS"
                theme="#264de4"
                width="large"
              />
              <Skill
                logo={<IoLogoJavascript />}
                text="JavaScript"
                theme="#f0db4f"
              />
              <Skill
                logo={<FaNodeJs />}
                text="NodeJs"
                theme="#44883d"
                width="large"
              />
              <Skill
                logo={<FaReact />}
                text="ReactJs"
                theme="#61dbfb"
                width="large"
              />
              <Skill
                logo={<FaReact />}
                text="React Nativ"
                theme="#4267b2"
                width="large"
              />
            </Carousel>
          ) : (
            <div>
              <Skill
                logo={<FaHtml5 />}
                text="HTML"
                theme="#e34c26"
                width="small"
              />
              <Skill
                logo={<FaCss3Alt />}
                text="CSS"
                theme="#264de4"
                width="small"
              />
              <Skill
                logo={<IoLogoJavascript />}
                text="JavaScript"
                theme="#f0db4f"
                width="small"
              />
              <Skill
                logo={<FaNodeJs />}
                text="NodeJs"
                theme="#44883d"
                width="small"
              />
              <Skill
                logo={<FaReact />}
                text="ReactJs"
                theme="#61dbfb"
                width="small"
              />
              <Skill
                logo={<FaReact />}
                text="React Nativ"
                theme="#4267b2"
                width="small"
              />
            </div>
          )}
        </Container>
      </div>
    )
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize)
  }
}
