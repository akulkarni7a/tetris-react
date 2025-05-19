import Board from './components/Board';
import UpcomingBlocks from './components/UpcomingBlocks';
import HighScores from './components/HighScores';
import { useTetris } from './hooks/useTetris';

function App() {
  const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris();

  return (
    <div className="app">
      <h1>Tetris</h1>
      <Board currentBoard={board} />
      <div className="controls">
        <h2>Score: {score}</h2>
        {isPlaying ? (
          <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
        ) : (
          <>
            <button onClick={() => startGame(false)}>New Game</button>
            <button onClick={() => startGame(true)}>Hard Mode</button>
            <HighScores />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
