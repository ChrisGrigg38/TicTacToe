import React, { useEffect, useReducer, useState } from 'react';
import './Board.css';
import Score from '../Score/Score';
import BoardSpace from '../BoardSpace/BoardSpace';
import { checkDraw, checkWin, nextGame, placePiece, BoardState, computeAIMove, MAX_ROUND } from '../../util/boardStateLogic';

export const defaultBoardState: BoardState = {
  board: [0,0,0,0,0,0,0,0,0], turn: 0, score: [0,0], ingame: false, round: 0, lastTurn: 1, lightUpBoard: [false,false,false,false,false,false,false,false,false], history: []
};

const Board = () => {
  const [boardState, setBoardState] = useState<BoardState>(defaultBoardState);
  
  const updateBoard = (boardNum: number) => {
    setBoardState(placePiece(boardState, boardNum));
  };

  useEffect(() => {
    const newState = checkWin(boardState);
    if(newState) {
      setBoardState(newState);
    }
    else {
      const drawState = checkDraw(boardState);
      if(drawState) {
        setBoardState(drawState);
      }
      else if(boardState.turn == 1) {
        const aiState = computeAIMove(boardState);

        if(aiState) {
          setBoardState(aiState);
        }
      }
    }
    
  }, [boardState.board]);

  const nextGameCallback = () => {
    setBoardState(nextGame(boardState));
  };

  return (
      <div className="boardArea">
        <div className="scoreArea">
          <Score score={boardState.score} ingame={boardState.ingame} nextGame={nextGameCallback} round={boardState.round} />
        </div>
        <div className="boardGrid">
          <div className="boardRow">
            <div className="boardContainer"><BoardSpace boardNum={0} currentNum={boardState.board[0]} updateBoard={updateBoard} lightBoard={boardState.lightUpBoard[0]} disabled={boardState.turn >= MAX_ROUND} /></div>
            <div className="boardContainer"><BoardSpace boardNum={1} currentNum={boardState.board[1]} updateBoard={updateBoard} lightBoard={boardState.lightUpBoard[1]} disabled={boardState.turn >= MAX_ROUND} /></div>
            <div className="boardContainer"><BoardSpace boardNum={2} currentNum={boardState.board[2]} updateBoard={updateBoard} lightBoard={boardState.lightUpBoard[2]} disabled={boardState.turn >= MAX_ROUND} /></div>
          </div>
          <div className="boardRow">
            <div className="boardContainer"><BoardSpace boardNum={3} currentNum={boardState.board[3]} updateBoard={updateBoard} lightBoard={boardState.lightUpBoard[3]} disabled={boardState.turn >= MAX_ROUND} /></div>
            <div className="boardContainer"><BoardSpace boardNum={4} currentNum={boardState.board[4]} updateBoard={updateBoard} lightBoard={boardState.lightUpBoard[4]} disabled={boardState.turn >= MAX_ROUND} /></div>
            <div className="boardContainer"><BoardSpace boardNum={5} currentNum={boardState.board[5]} updateBoard={updateBoard} lightBoard={boardState.lightUpBoard[5]} disabled={boardState.turn >= MAX_ROUND} /></div>
          </div>
          <div className="boardRow">
            <div className="boardContainer"><BoardSpace boardNum={6} currentNum={boardState.board[6]} updateBoard={updateBoard} lightBoard={boardState.lightUpBoard[6]} disabled={boardState.turn >= MAX_ROUND} /></div>
            <div className="boardContainer"><BoardSpace boardNum={7} currentNum={boardState.board[7]} updateBoard={updateBoard} lightBoard={boardState.lightUpBoard[7]} disabled={boardState.turn >= MAX_ROUND} /></div>
            <div className="boardContainer"><BoardSpace boardNum={8} currentNum={boardState.board[8]} updateBoard={updateBoard} lightBoard={boardState.lightUpBoard[8]} disabled={boardState.turn >= MAX_ROUND} /></div>
          </div>
        </div>  
      </div>
  );
}

export default Board;
