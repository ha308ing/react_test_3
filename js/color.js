import React from "react"
import RatingStars from "./ratingStars"
import {FaTrash} from "react-icons/fa"

export default function Color ({id, name, color, rating, removeColor=f=>f}) {
  return (
    <>
      <h2>{name}</h2><span><FaTrash onClick={()=>removeColor(id)}/></span>
      <div style={{height: 25+'px', backgroundColor: color}} ></div>
      <RatingStars rating={rating} />
    </>
  )
}
