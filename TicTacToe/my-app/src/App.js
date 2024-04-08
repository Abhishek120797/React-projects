import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, square, onPlay }) {
  function handleClick(i) {
    if (calculateWiner(square) || square[i]) {
      return;
    }
    const nextSquare = square.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }

    onPlay(nextSquare);
  }

  const winner = calculateWiner(square);

  const isBoardFull = square.every((value) => value !== null);

  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isBoardFull) {
    status = `It is a draw`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <div className="status">{status}</div>
      {[0, 1, 2].map((i) => (
        <div key={i} className="board-row">
          {[0, 1, 2].map((j) => {
            const squareIndex = i * 3 + j;
            return (
              <Square
                key={squareIndex}
                value={square[squareIndex]}
                onSquareClick={() => handleClick(squareIndex)}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquare = history[currentMove];

  function handlePlay(nextSquare) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory(nextHistory);
    setCurentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurentMove(nextMove);
  }

  const moves = history.map((square, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = `Go to game start`;
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} square={currentSquare} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWiner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}

export default App;
