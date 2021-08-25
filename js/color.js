import React from "react"
import RatingStars from "./ratingStars"
import { FaTrash } from "react-icons/fa"
import { useColors } from "./color-hooks";

export default function Color({ id, name, color, rating }) {
  const { removeColor, rateColor, setColor } = useColors();
  return (
    <>
      <h2>
        {name}{" "}
        <FaTrash
          style={{ fontSize: .5 + "em" }}
          onClick={() => removeColor(id)} />
      </h2>
      <input
        type="color"
        value={color}
        // style={{
        //   height: 25 + 'px',
        //   width: 50 + 'px',
        //   backgroundColor: color,
        //   borderRadius: 4 + 'px'
        // }}
        onChange={(event) => setColor(id, event.target.value)} />
      <RatingStars rating={rating} onRate={(rating) => rateColor(id, rating)} />
    </>
  )
}
