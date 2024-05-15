import {useState, useEffect, useRef} from 'react'
import './Board.css'

function generate_fruit() {


}

function Board() {
  // CONSTANTS VARIABLES
  const board_size = [512, 512];
  const scale = 32;
  const snake_start = [[8,8],[8,7]];
  const fruit_start = [8,3];

  const board_ref = useRef(null);
  const [score, setScore] = useState(0);
  const [fruit, setFruit] = useState(fruit_start);
  const [snake, setSnake] = useState(snake_start);
  const [direction, setDirection] = useState([0, -1]);
  const [win, setWin] = useState(false);
  const [loss, setLoss] = useState(false);
  // const context = board_ref.current.getContext('2d');

  const reset_game = () => {
    setScore(0);
    setFruitLocation({x: 0, y: 0});
    setSnakeLocation({x: 0, y: 0});
    setWin(false);
    setLoss(false);
  }

  const clear_board = () => {
    setFruitLocation({x: 0, y: 0});
    setSnakeLocation({x: 0, y: 0});
  }

  const start_game = () => {
    alert('game started')
    game_run();
  }

  const game_run = () => {
    if (!win && !loss) {
      setTimeout(() => {
        clear_board();
        game_state();
      }, 100)
    } else {
      if (win) {
        alert('You win!')
      } else {
        alert('You lose!')
      }
    }
  }

  useEffect(() => {
    generate_fruit()
    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setSnakeLocation({x: snakeLocation.x, y: snakeLocation.y - 1})
          break;
        case 'ArrowDown':
          setSnakeLocation({x: snakeLocation.x, y: snakeLocation.y + 1})
          break;
        case 'ArrowLeft':
          setSnakeLocation({x: snakeLocation.x - 1, y: snakeLocation.y})
          break;
        case 'ArrowRight':
          setSnakeLocation({x: snakeLocation.x + 1, y: snakeLocation.y})
          break;
      }
    });
  }, [score]);

  return (
    <>
      <div className='main_container'>
        <div>Score: {score}</div>
        <canvas
          style={{ border: "4px solid black" }}
          ref={board_ref}
          width={`${board_size[0]}px`}
          height={`${board_size[1]}px`}
          className='board'
        />
        <div><button onClick={start_game}>Start Game</button></div>
      </div>
    </>
  )
}

export default Board