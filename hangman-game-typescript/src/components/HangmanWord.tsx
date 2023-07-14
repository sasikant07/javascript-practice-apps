import React, { FC } from 'react';

type HangmanWordProps = {
    guessedLetters: string[],
    wordToGuess: string,
    reveal?: boolean
}

const HangmanWord:FC<HangmanWordProps> = ({guessedLetters, wordToGuess, reveal = false}) => {

  return (
    <div className="word-text">
        {wordToGuess.split("").map((letter, index) => (
            <span className="word-align" key={index}>
                <span 
                    style={{
                        visibility:
                          guessedLetters.includes(letter) || reveal
                            ? "visible"
                            : "hidden",
                        color:
                          !guessedLetters.includes(letter) && reveal ? "red" : "black",
                      }}
                    >
                {letter}
                </span>
            </span>
        ))}
    </div>
  )
}

export default HangmanWord;