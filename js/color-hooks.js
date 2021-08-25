import React, { useState, createContext, useContext } from "react"
import colorsData from "./colorsData.json"

const ColorContext = createContext()
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [colors, updateColors] = useState(colorsData);


  const addColor = (c) =>
    updateColors([c, ...colors]);

  const removeColor = (id) =>
    updateColors(colors.filter(c => c.id !== id))

  const rateColor = (id, rating) => {
    updateColors(colors.map((c, i) => c.id === id ? { ...c, rating: rating } : c))
  }

  const setColor = (id, color) => {
    updateColors(colors.map((c, i) => c.id === id ? { ...c, color: color } : c))
  }

  const idList = colors.map((c,i)=>c.id)


  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor, setColor, idList }}>
      {children}
    </ColorContext.Provider>
  )
}
