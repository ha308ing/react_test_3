import React, {useState, createContext} from "react"
import colorsData from "./colorsData.json"
import Color from "./color"
import ReactDOM from "react-dom"
import AddColor from "./addColor"

export default function Colors () {
  const [colors, updateColors] = useState(colorsData);

  const addColor = (c) => {
    // console.log{{...c}, ...colors});
    updateColors([c, ...colors]);
  }

  const handleRemoveColor = (id)=>
    updateColors(colors.filter(c=>c.id!==id))

  return (
    <>
      <AddColor handleAddColor={addColor}/>
      {colors.map((c,i)=><Color key={c.id} {...c} removeColor={handleRemoveColor} />)}
    </>
  )
}

ReactDOM.render(<Colors />, document.querySelector('#main'))
