import React, { useReducer } from 'react';
import './BoardSpace.css';

interface BoardSpaceProps {
     boardNum: number;
     lightBoard: boolean;
     currentNum: number;
     disabled: boolean;
     updateBoard: (boardNum: number) => void;
};

const BoardSpace = ({boardNum, lightBoard, currentNum, updateBoard, disabled}: BoardSpaceProps) => {
  
  const placePiece = () => {
    updateBoard(boardNum);
  };

  return (
    <div data-testid={"board" + boardNum} className={lightBoard ? "lightBoardSpace boardSpace" : "normalBoardSpace boardSpace"} onClick={() => { if(!disabled) { placePiece() }}}>
      {currentNum == 1 ? "X" : currentNum == 2 ? "O" : ""}
    </div>
  );
}

export default BoardSpace;
