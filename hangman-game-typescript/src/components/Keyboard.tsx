import React, { FC } from 'react';

const KEYS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

type KeyboardProps = {
    disabled?: boolean,
    activeLetters: string[],
    inActiveLetters: string[],
    addGuessedLetter: (letter: string) => void,
}

const Keyboard:FC<KeyboardProps> = ({activeLetters, inActiveLetters, addGuessedLetter, disabled = false}) => {
  return (
    <div className="keyboard-container">
        {KEYS.map((key) => {
            const isActive = activeLetters.includes(key);
            const isInactive = inActiveLetters.includes(key);
            return <button 
                    onClick={() => addGuessedLetter(key)} 
                    className={`btn ${isActive ? "active" : ""} ${isInactive ? "inactive" : ""}`}
                    disabled={isActive || isInactive || disabled}
                    key={key}>
                    {key}
                </button>
        })}
    </div>
  )
}

export default Keyboard;