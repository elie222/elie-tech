import * as React from "react"
import { renderToString } from "react-dom/server"

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  replaceBodyHTMLString(renderToString(bodyComponent))
}
