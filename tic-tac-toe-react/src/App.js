import React, {useState} from "react";
import './App.css';
import Square from "./Square";
import { calculateWinner } from "./utils";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = isX ? "X" : "O";
    setSquares(squares);
    setIsX(!isX);
  }

  const winner = calculateWinner(squares);
  let status;
  
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next Player: " +(isX ? "X" : "O"); 
  }

  const handleRestart = () => {
    setIsX(true);
    setSquares(Array(9).fill(null));
  }

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />
  }

  return (
    <div className="App">
      <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="status">{status}</div>
      <button className="restart" onClick={handleRestart}>Restart Game!</button>
    </div>
    </div>
  );
}

export default App;
