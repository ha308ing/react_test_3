import React from "react"
import RatingStars from "./ratingStars"
import { FaTimes } from "react-icons/fa"
import { useColors } from "./color-hooks";
import styles from "../css/color.module.css"

export default function Color({ id, name, color, rating }) {
  const { removeColor, rateColor, setColor } = useColors();
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        {name}{" "}
        <FaTimes
          style={{ fontSize: .5 + "em" }}
          onClick={() => removeColor(id)} />
      </h2>
      <input
       className={styles.color}
        type="color"
        value={color}
        // style={{
        //   height: 25 + 'px',
        //   width: 50 + 'px',
        //   backgroundColor: color,
        //   borderRadius: 4 + 'px'
        // }}
        onChange={(event) => setColor(id, event.target.value)} />
      <RatingStars className={styles.rating} rating={rating} onRate={(rating) => rateColor(id, rating)} />
    </div>
  )
}
