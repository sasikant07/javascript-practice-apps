import React, {useState} from 'react';
import "./tictactoe.css";

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [isX, setIsX] = useState(true);

    let status;

    const handleClick = (n) => {
        if (checkWin(board) || board[n]) {
            return;
        }
        board[n] = isX ? "X" : "O";
        setBoard(board);
        setIsX(!isX);
        
    }
    
    const checkWin = (squares) => {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        
        for (let i = 0; i < winningPatterns.length; i++) {
            const [a, b, c] = winningPatterns[i];
            
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    
    const checkDraw = (board) => {
        let count = 0;
        
        board.forEach(element =>  {
            if (element !== "") {
                count++;
            }
        });
        
        if (count >= 9) {
            return true;
        } else {
            return false;
        }
    }
    
    const handleRestart = () => {
        setBoard(Array(9).fill(""));
        setIsX(true);
    }
    
    
    const checkStatus = () => {
        const winner = checkWin(board);
        const draw = checkDraw(board);
        
        if (winner) {
            status = `Winner: ${winner}`;
        } else if (draw) {
            status = "Match Drawn!"
        } else {
            status = "Next Player: " +(isX ? "X" : "O"); 
        }
    }
    
    checkStatus();
 return (
    <>
        <h1 className="title">Tic Tac Toe</h1>
        <table>
            <tbody>
                <tr>
                    <td onClick={() => handleClick(0)}>{board[0]}</td>
                    <td onClick={() => handleClick(1)}>{board[1]}</td>
                    <td onClick={() => handleClick(2)}>{board[2]}</td>
                </tr>
                <tr>
                    <td onClick={() => handleClick(3)}>{board[3]}</td>
                    <td onClick={() => handleClick(4)}>{board[4]}</td>
                    <td onClick={() => handleClick(5)}>{board[5]}</td>
                </tr>
                <tr>
                    <td onClick={() => handleClick(6)}>{board[6]}</td>
                    <td onClick={() => handleClick(7)}>{board[7]}</td>
                    <td onClick={() => handleClick(8)}>{board[8]}</td>
                </tr>
            </tbody>
        </table>
        <div className="status">{status}</div>
        <button className="restart" onClick={handleRestart}>Restart Game!</button>
    </>
  )
}

export default TicTacToe;