import React from "react"
import {AiTwotoneStar} from "react-icons/ai"

export default function RatingStar({selected = false, defaultColor = "grey", selectedColor = "red", handleClick=f=>f}) {
  const color = selected ? selectedColor : defaultColor;
  console.log(color);
  return (<AiTwotoneStar style={{color: color}} onClick={handleClick}/>)
}
