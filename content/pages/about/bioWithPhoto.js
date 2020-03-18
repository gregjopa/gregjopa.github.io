import { Component } from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

class BioWithPhoto extends Component {
  render() {
    const { children } = this.props
    return (
      <div sx={{ display: "flex", flexDirection: ["column-reverse", "column-reverse", "row"] }}>
        <div sx={{ flex: 2 }}>{children}</div>
        <div sx={{ flex: 1, ml: [0, 0, 4], mb: [1, 2, 0] }}>
          <img sx={{ width: "300px", height: "450px" }} src="/greg-jopa-outdoor-headshot.jpg"
            alt="Headshot of Greg Jopa" />
        </div>
      </div>
    )
  }
}

export default BioWithPhoto
