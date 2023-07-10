import React from 'react'

const TextInput = ({title, state, setState, minValue, maxValue}) => {
  return (
    <>
        <span className="title">{title}</span>
        <input type="number" min={minValue} max={maxValue} value={state} onChange={(e) => setState(e.target.value)} placeholder={title} />
    </>
  )
}

export default TextInput;