import './Score.css';
import { MAX_ROUND } from '../../util/boardStateLogic';

interface ScoreProps {
     score: number[];
     round: number;
     ingame: boolean;
     nextGame: () => void;
};

const Score = ({score, round, ingame, nextGame}: ScoreProps) => {
  
  const startNextGame = () => {
    nextGame();
  };

  return (
    <div className="scoreBoard">
        <div data-testid="myScore" className={round <= MAX_ROUND ? "scoreText" : round >= MAX_ROUND && !ingame ? score[0] >= score[1] ? "winScoreText scoreText" : "scoreText" : "scoreText"}>
             Your score: {score[0]}
        </div>
        <div  className="roundText">
           {ingame ? <div data-testid="roundText">Round {round}</div> : round < MAX_ROUND ? <div><button data-testid="restartBut" className="restartButton" onClick={() => {startNextGame()}}>Start New Round</button></div> : null}
        </div>
        <div data-testid="computerScore" className={round <= MAX_ROUND ? "scoreText" : round >= MAX_ROUND && !ingame ? score[1] >= score[0] ? "winScoreText scoreText" : "scoreText" : "scoreText"}>
             Computer score: {score[1]}
        </div>
    </div>
  );
}

export default Score;
