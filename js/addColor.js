import React, {useState} from "react"

export default function addColor({handleAddColor=f=>f}) {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [rating, setRating] = useState(0);
  
  return (
    <fieldset>
      <label>id:{" "}<input value={id} onChange={(event)=>setId(event.target.value)} type="nubmer" size="4" /></label>
      <label>name:{" "}<input value={name} onChange={(event)=>setName(event.target.value)} type="text" size="12" /></label>
      <label>color:{" "}<input value={color} onChange={(event)=>setColor(event.target.value)} type="color" /></label>
      <label>rating:{" "}<input value={rating} onChange={(event)=>setRating(event.target.value)} type="nubmer" min="0" max="5" size="12" /></label>
      <button onClick={()=>handleAddColor({id, name, color, rating})}>Add Color</button>
    </fieldset>
  )
}
