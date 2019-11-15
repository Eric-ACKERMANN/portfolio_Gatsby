import React from "react"

import Introduction from "../components/Introduction"
import Portfolio from "../components/Portfolio"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import Layout from "../components/Layout"

export default class Home extends React.Component {
  state = {
    form: { name: "", email: "", message: "" },
    navIsDeployed: false,
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  handleChangeForm = (e, key) => {
    let form = { ...this.state.form }
    form[key] = e
    this.setState({ form: form })
  }

  handleClickNavSmall = e => {
    this.setState({ navIsDeployed: !this.state.navIsDeployed })
  }

  render() {
    return (
      <Layout
        navIsDeployed={this.state.navIsDeployed}
        setNavSmall={this.handleClickNavSmall}
      >
        <section id="introduction">
          <Introduction />
        </section>
        <section id="projects">
          <Portfolio />
        </section>
        {/* <section id="skills">
          <Skills />
        </section> */}
        <section id="contact">
          <Contact
            formValue={this.state.form}
            handleSubmit={this.handleSubmit}
            setForm={this.handleChangeForm}
          />
        </section>
      </Layout>
    )
  }
}
