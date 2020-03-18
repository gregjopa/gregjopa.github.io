import React from "react"
/** @jsx jsx */
import { jsx, Container } from "theme-ui"

const Link = ({ href, text}) => {
  if (!href) return null
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      sx={{
        width: "225px",
        fontSize: 2,
        px: 5,
        py: 3,
        mb: [4, 0],
        color: "primary",
        backgroundColor: "background",
        border: "1px solid",
        borderColor: "primary",
        textAlign: "center",
        textDecoration: "none",
        ":hover, :focus": {
          backgroundColor: "primary",
          color: "white"
        }
      }}
    >{text}</a>
  )
}

function DemoButtonGroup ({ downloadLink, demoLink }) {
  return (
    <Container sx={{
      maxWidth: "650px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
      }}>
      <Link href={downloadLink} text="Download" />
      <Link href={demoLink} text="Demo" />
    </Container>
  )
}

export default DemoButtonGroup
