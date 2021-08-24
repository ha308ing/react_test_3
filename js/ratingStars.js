import React, {useState} from "react"
import RatingStar from "./ratingStar"

export default function RatingStars({rating = 0, maxRating = 5}) {
  const [newRating, setRating] = useState(rating);
  return (
    <div rating={newRating}>
      {[...Array(maxRating)].map((n,i)=><RatingStar key={i} handleClick={()=>setRating(i+1)} selected={i < newRating ? true: false}/>)}
    </div>
  )
}
