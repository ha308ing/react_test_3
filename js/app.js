import React from "react"
import AddColor from "./addColor"
import ColorList from "./colorList"
import styles from "../css/app.module.css"

export default function App() {
  return (
    <div className={styles.container}>
      <ColorList />
      <AddColor />
    </div>
  )
}
