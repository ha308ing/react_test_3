import React from "react"
import App from "./app"
import ColorProvider from "./color-hooks"
import { render } from "react-dom"

render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.querySelector('#main')
)
