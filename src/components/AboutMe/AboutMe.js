import React from "react"
import {
  FaRegMap,
  FaBuilding,
  FaHardHat,
  FaLaptopCode,
  FaRegUser,
} from "react-icons/fa"
import { GoBrowser } from "react-icons/go"

export default class AboutMe extends React.Component {
  render() {
    return (
      <div className="container aboutme">
        <h2>About Me</h2>
        <section>
          <article>
            <div>
              <span>Present</span>
              <p>
                I finished my bootcamp training at Le Reacteur in Paris. It is a
                bootcamp focused on a fullstack formation using
                JS/Node.js/React/React Nativ/MongoDB. Making us able to deal the
                back end and the front end for a website/web app/mobil app using
                React and React Nativ.
              </p>
            </div>
            <div>
              <span>Past</span>
              <p>
                I graduated from school as civil engineer and worked for 6 years
                as a construction site manager. Planning, orchestring, checking
                how the construction goes everyday was my routine. I kind of
                felt that my growth had stopped, so I wanted to go back to the
                basics of my engineer skills, which is to solve logical problems
                everyday and keep learning everyday.
              </p>
            </div>
          </article>
          <article>
            <div>
              <FaHardHat />
              <FaRegMap />
              <FaBuilding />
            </div>
            <div>
              <i className="fas fa-long-arrow-alt-right" />
            </div>
            <div>
              <FaRegUser />
              <FaLaptopCode />
              <GoBrowser />
            </div>
          </article>
        </section>
      </div>
    )
  }
}
