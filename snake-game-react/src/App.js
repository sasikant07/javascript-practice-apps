import {useState, useEffect, useRef} from "react";
import './App.css';
import {useInterval} from "./useInterval";
import {CANVAS_SIZE, SNAKE_START, APPLE_START, SCALE, SPEED, DIRECTIONS} from "./constants";

function App() {

  const canvasRef = useRef(null);
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameover] = useState(false);

  useInterval(() => gameLoop(), speed);

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameover(false);
  }

  const endGame = () => {
    setSpeed(null);
    setGameover(true);
  }

  const moveSnake = ({keyCode}) => keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

  const createApple = () => {
    return apple.map((_, index) => Math.floor(Math.random() * (CANVAS_SIZE[index] / SCALE)));
  }
    
  const checkCollision = (piece, snk = snake) => {
    // to check snake collide the wall
    if (piece[0] * SCALE >= CANVAS_SIZE[0] || piece[0] < 0 || piece[1] * SCALE >= CANVAS_SIZE[1] || piece[1] < 0) {
      return true;
    }

    // to check snake collide itself
    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) {
        return true;
      }
    }

    return false;
  }

  const checkAppleCollision = (newSnake) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while(checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
    return false;
  }

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];    // direction x cordinate and Y cordinate
    snakeCopy.unshift(newSnakeHead);

    if (checkCollision(newSnakeHead)) {
      endGame();
    }

    if (!checkAppleCollision(snakeCopy)) {
      snakeCopy.pop();
    }

    setSnake(snakeCopy);
  }

  useEffect((e) => {
    const context = canvasRef.current.getContext("2d"); // setTransform() method of the Canvas 2D API resets (overrides) the current transformation to the identity matrix, and then invokes a transformation described by the arguments of this method. This lets you scale, rotate, translate (move), and skew the context.
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    // context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);  // The clearRect() method sets the pixels in a rectangular area to transparent black ( rgba(0,0,0,0) ). The rectangle's top-left corner is at (x, y) , and its size is specified by width and height 
    context.fillStyle = "pink"; // for snake
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = "lightblue";  // for apple
    context.fillRect(apple[0], apple[1], 1, 1);     // The fillRect() method draws a filled rectangle whose starting point is at (x, y) and whose size is specified by width and height . The fill style is determined by the current fillStyle attribute.

  }, [snake, apple, gameOver]);

  return (
    <div role="button" tabIndex="0" onKeyDown={(e) => moveSnake(e)}>
      <canvas 
        style={{border: "1px solid black"}} 
        ref={canvasRef} 
        width={`${CANVAS_SIZE[0]}px`} 
        height={`${CANVAS_SIZE[1]}px`} />
        {gameOver && <div>GAME OVER!</div>}
        <button onClick={startGame}>Start Game</button>
    </div>
  );
}

export default App;
