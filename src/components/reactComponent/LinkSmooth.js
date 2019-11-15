import React from "react"

const scrollingMethod = (id, position, behavior) => {
  let linkHTML = document.getElementById(id)
  if (linkHTML) {
    linkHTML.scrollIntoView({ block: position, behavior: behavior })
  }
}

const handleClick = (event, id, position, behavior) => {
  scrollingMethod(id, position, behavior)
  event.preventDefault()
}

export default function LinkSmooth({
  id,
  position = "start",
  behavior = "smooth",
  text,
}) {
  return (
    <a
      href={`#${id}`}
      onClick={event => handleClick(event, id, position, behavior)}
    >
      {text}
    </a>
  )
}
