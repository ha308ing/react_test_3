import React, { useState } from "react"
import { useColors } from "./color-hooks";

export default function addColor() {
  const [id, setId] = useState(1234);
  const [name, setName] = useState("cyan");
  const [color, setColor] = useState("#74ffff");
  const [rating, setRating] = useState(3);

  const { addColor, idList } = useColors();

  const submit = color => event => {
    event.preventDefault();
    if (idList.includes(id))
      alert("Duplicate id. Please change.")
    else
      addColor(color);
  }

  const setState = f => event => f(event.target.value)

  return (
    <form onSubmit={submit({ id, name, color, rating })}>
      <fieldset>

        <label>
          id:{" "}
          <input
            value={id}
            onChange={setState(setId)}
            type="nubmer"
            size="4" />
        </label>{" "}

        <label>
          name:{" "}
          <input
            value={name}
            onChange={setState(setName)}
            type="text"
            size="12" />
        </label>{" "}

        <label>
          color:{" "}
          <input
            value={color}
            onChange={setState(setColor)}
            type="color" />
        </label>{" "}

        <label>
          rating:{" "}
          <input
            value={rating}
            onChange={setState(setRating)}
            type="nubmer"
            min="0" max="5"
            size="12" />
        </label>{"\n"}

        <input type="submit" value="Add Color" />

      </fieldset>
    </form>
  )
}
