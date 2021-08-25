import React from "react"
import Color from "./color"
import { useColors } from "./color-hooks"

export default function ColorList() {
  const { colors } = useColors();
  if (colors.length < 1)
    return <h2>There is no colors</h2>
  else return (
    <>
      {colors.map((c, i) => <Color key={c.id} {...c} />)}
    </>
  )
}
