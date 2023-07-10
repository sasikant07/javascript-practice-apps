import React from 'react'
import { amountWithCommas } from '../utils/config';

const SliderInput = ({title, state, min, max, onChange, labelMin, labelMax, undrlineTitle}) => {
  return (
    <>
        <span className="title">{title}</span>
        {state > 0 && <span className="title" style={{textDecoration: "underline"}}>
            {" "}
            {undrlineTitle}
        </span>}
        <div>
            <input type="range" className="slider" min={min} max={max} value={state} onChange={onChange}/>
            <div className="labels">
            <label>{labelMin ?? amountWithCommas(min)}</label>
            <b>{amountWithCommas(state)}</b>
            <label>{labelMax ?? amountWithCommas(max)}</label>
            </div>
        </div>
    </>
  )
}

export default SliderInput;

// ??  => means "Nullish Coaleshing" which means if something is false then render that.
// here if "labelMin" is false the render "amountWithCommas(min)" else render "labelMin"