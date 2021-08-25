import React from "react"
import RatingStar from "./ratingStar"
import styles from "../css/ratingStars.module.css"

export default function RatingStars({ rating = 0, maxRating = 5, onRate = f => f }) {
  return (
    <div className={styles.rating} rating={rating}>
      {[...Array(maxRating)].map((n, i) =>
        <RatingStar
          key={i}
          handleClick={() => onRate(i + 1)}
          selected={i < rating ? true : false} />)}
    </div>
  )
}
