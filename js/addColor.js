import React, { useState } from "react"
import { useColors } from "./color-hooks"
import styles from "../css/addColor.module.css"

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [{ value, onChange: event => setValue(event.target.value) }, () => setValue(initialValue)]
}

export default function addColor() {
  const [idProps, resetId] = useInput(1234);
  const [nameProps, resetName] = useInput("cyan");
  const [colorProps, resetColor] = useInput("#74ffff");
  const [ratingProps, resetRating] = useInput(3);

  const { addColor, idList } = useColors();

  const resetProps = () => {
    resetId();
    resetName();
    resetColor();
    resetRating();
  }

  const currentColor = {
    id: idProps.value,
    name: nameProps.value,
    color: colorProps.value,
    rating: ratingProps.value,
  }

  const submit = color => event => {
    event.preventDefault();
    if (idList.includes(color.id))
      alert("Duplicate id. Please change.")
    else {
      addColor(color);
      resetProps();
    }
  }

  return (
    <form className={styles.form} onSubmit={submit(currentColor)}>
        <label className={styles.label}>
          id:{" "}
          <input
            {...idProps}
            className={styles.input}
            type="nubmer"
            size="4" />
        </label><br />

        <label className={styles.label}>
          name:{" "}
          <input
            {...nameProps}
            className={styles.input}
            type="text"
            size="12" />
        </label><br />

        <label className={styles.label}>
          color:{" "}
          <input
            {...colorProps}
            className={styles.input}
            type="color" />
        </label><br />

        <label className={styles.label}>
          rating:{" "}
          <input
            {...ratingProps}
            className={styles.input}
            type="nubmer"
            min="0" max="5"
            size="12" />
        </label><br />

        <input className={styles.button + " " + styles.button__centered} type="submit" value="Add Color" />
    </form>
  )
}
