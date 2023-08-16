import React from "react"
import ReactDOM, { createRoot } from "react-dom/client"
import { App } from "./Landing/App"

const rootElement = document.getElementById("react-root")
const root = createRoot(rootElement)
root.render(<App />)
