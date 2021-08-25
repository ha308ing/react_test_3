import React from "react"
import Color from "./color"
import { useColors } from "./color-hooks"
import styles from "../css/colorList.module.css"

export default function ColorList() {
  const { colors } = useColors();
  if (colors.length < 1)
    return (
      <div className={styles.colorList_container}>
        <h2>There is no colors</h2>
      </div>
    )
  else return (
    <div className={styles.colorList_container}>
      {colors.map((c, i) => <Color key={c.id} {...c} />)}
    </div>
  )
}
