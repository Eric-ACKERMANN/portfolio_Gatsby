import React from "react"
import Slider from "infinite-react-carousel"

export default ({ children }) => (
  <Slider dots slidesToShow={2}>
    {children}
  </Slider>
)
