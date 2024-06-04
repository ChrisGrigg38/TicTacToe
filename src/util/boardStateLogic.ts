import { useMemo } from "react";

export interface BoardHistory {
    state: number[];
    place: number;    
};

export interface BoardState {
    board: number[];
    lightUpBoard: boolean[];
    turn: number;
    score: number[];
    ingame: boolean;
    round: number;
    lastTurn: number;
    history: BoardHistory[];
};

export const MAX_ROUND = 12;

export const AI_MOVES: BoardHistory[] = [
    {state: [0, 0, 0, 0, 0, 0, 0, 0, 0], place: 4},
    {state: [1, 0, 0, 0, 2, 0, 0, 0, 0], place: 2},
    {state: [1, 1, 2, 0, 2, 0, 0, 0, 0], place: 6},
    {state: [0, 0, 0, 0, 1, 0, 0, 0, 0], place: 2},
    {state: [0, 0, 2, 0, 1, 0, 0, 0, 1], place: 0},
    {state: [2, 0, 2, 0, 1, 0, 0, 1, 1], place: 6},
    {state: [2, 0, 2, 0, 1, 1, 2, 1, 1], place: 3},
    {state: [0, 0, 1, 0, 2, 0, 0, 0, 0], place: 5},
    {state: [0, 0, 1, 1, 2, 2, 0, 0, 0], place: 7},
    {state: [0, 1, 1, 1, 2, 2, 0, 2, 0], place: 0},
    {state: [2, 1, 1, 1, 2, 2, 1, 2, 0], place: 8},
    {state: [0, 0, 1, 0, 2, 0, 0, 0, 0], place: 8},
    {state: [1, 0, 1, 0, 2, 0, 0, 0, 2], place: 1},
    {state: [1, 2, 1, 0, 2, 0, 0, 1, 2], place: 3},
    {state: [1, 2, 1, 2, 2, 0, 1, 1, 2], place: 5},
    {state: [0, 0, 1, 0, 2, 1, 0, 2, 0], place: 1},
    {state: [0, 0, 1, 0, 1, 0, 0, 2, 0], place: 6},
    {state: [0, 0, 1, 0, 1, 1, 2, 2, 0], place: 8},
    {state: [0, 0, 1, 0, 2, 2, 1, 0, 0], place: 3},
    {state: [1, 0, 1, 0, 2, 2, 0, 0, 0], place: 3},
    {state: [0, 0, 2, 0, 1, 1, 0, 0, 0], place: 3},
    {state: [0, 0, 2, 2, 1, 1, 0, 1, 0], place: 1},
    {state: [1, 2, 2, 2, 1, 1, 0, 1, 0], place: 8},
    {state: [2, 1, 1, 1, 2, 2, 0, 2, 1], place: 6},
    {state: [1, 2, 1, 0, 2, 0, 0, 0, 0], place: 7},
    {state: [0, 0, 2, 0, 0, 1, 0, 0, 0], place: 4},
    {state: [0, 0, 2, 1, 2, 1, 0, 0, 0], place: 6},
    {state: [0, 2, 0, 0, 0, 0, 1, 0, 0], place: 4},
    {state: [0, 2, 0, 0, 2, 0, 1, 0, 1], place: 7},
    {state: [1, 0, 1, 0, 2, 0, 0, 2, 0], place: 1},
    {state: [0, 0, 0, 0, 1, 1, 2, 0, 0], place: 3},
    {state: [1, 0, 0, 2, 1, 1, 2, 0, 0], place: 8},
    {state: [1, 0, 1, 2, 1, 1, 2, 0, 2], place: 7},
    {state: [0, 0, 0, 2, 0, 1, 0, 0, 0], place: 4},
    {state: [0, 1, 0, 2, 2, 1, 0, 0, 0], place: 6},
    {state: [0, 1, 0, 2, 2, 1, 2, 0, 1], place: 2},
    {state: [0, 1, 1, 1, 2, 2, 0, 0, 2], place: 0},
    {state: [2, 1, 2, 0, 1, 0, 0, 0, 1], place: 7},
    {state: [2, 1, 2, 1, 1, 0, 0, 2, 1], place: 5},
    {state: [0, 0, 0, 2, 0, 0, 0, 1, 0], place: 4},
    {state: [0, 0, 0, 2, 2, 1, 0, 1, 0], place: 0},
    {state: [2, 1, 0, 2, 2, 1, 0, 1, 0], place: 8},
    {state: [0, 0, 1, 1, 2, 2, 0, 0, 0], place: 8},
    {state: [0, 0, 0, 0, 0, 0, 0, 0, 0], place: 0},
    {state: [2, 0, 0, 1, 0, 0, 0, 0, 0], place: 4},
    {state: [2, 0, 1, 1, 2, 0, 0, 0, 0], place: 8},
    {state: [0, 0, 0, 0, 0, 0, 0, 0, 0], place: 2},
    {state: [0, 0, 2, 0, 0, 0, 1, 0, 0], place: 5},
    {state: [0, 0, 2, 0, 0, 2, 1, 1, 0], place: 8},
    {state: [0, 0, 1, 0, 0, 0, 0, 0, 0], place: 4},
    {state: [0, 0, 1, 0, 2, 1, 0, 0, 0], place: 8},
    {state: [1, 0, 1, 0, 2, 1, 0, 0, 2], place: 1},
    {state: [1, 2, 1, 0, 2, 1, 0, 1, 2], place: 3},
    {state: [0, 0, 1, 1, 2, 2, 0, 1, 2], place: 0},
    {state: [1, 0, 0, 0, 0, 0, 0, 0, 0], place: 4},
    {state: [1, 1, 0, 0, 2, 0, 0, 0, 0], place: 2},
    {state: [1, 1, 2, 1, 2, 0, 0, 0, 0], place: 6},
    {state: [0, 0, 2, 0, 1, 0, 0, 0, 0], place: 5},
    {state: [0, 0, 2, 0, 1, 2, 0, 0, 1], place: 0},
    {state: [2, 1, 2, 0, 1, 2, 0, 0, 1], place: 7},
    {state: [2, 1, 2, 1, 1, 2, 0, 2, 1], place: 6},
    {state: [0, 0, 0, 0, 0, 0, 0, 0, 0], place: 5},
    {state: [0, 1, 0, 0, 0, 2, 0, 0, 0], place: 2},
    {state: [0, 1, 2, 0, 0, 2, 0, 1, 0], place: 8},
    {state: [0, 0, 0, 0, 0, 2, 0, 1, 0], place: 4},
    {state: [1, 0, 0, 0, 2, 2, 0, 1, 0], place: 3},
    {state: [1, 1, 2, 0, 2, 0, 0, 1, 0], place: 6},
    {state: [0, 0, 0, 0, 0, 0, 0, 0, 0], place: 6},
    {state: [0, 0, 0, 0, 0, 0, 2, 0, 1], place: 4},
    {state: [0, 0, 1, 0, 2, 0, 2, 0, 1], place: 5},
    {state: [0, 1, 1, 0, 2, 2, 2, 0, 1], place: 3},
    {state: [1, 0, 0, 0, 0, 0, 0, 0, 0], place: 3},
    {state: [1, 0, 0, 2, 1, 0, 0, 0, 0], place: 8},
    {state: [1, 0, 0, 2, 1, 0, 1, 0, 2], place: 2},
    {state: [1, 1, 2, 2, 1, 0, 1, 0, 2], place: 5},
    {state: [0, 0, 0, 0, 0, 1, 0, 0, 0], place: 4},
    {state: [1, 0, 0, 0, 2, 1, 0, 0, 0], place: 2},
    {state: [1, 0, 2, 0, 2, 1, 1, 0, 0], place: 3},
    {state: [1, 0, 2, 2, 2, 1, 1, 1, 0], place: 8},
    {state: [0, 0, 0, 0, 1, 2, 0, 0, 0], place: 2},
    {state: [0, 0, 2, 0, 1, 2, 0, 0, 1], place: 1},
    {state: [0, 2, 2, 0, 1, 2, 0, 1, 1], place: 0},
    {state: [0, 0, 1, 1, 2, 2, 1, 0, 2], place: 0},
    {state: [0, 0, 0, 0, 0, 1, 0, 0, 0], place: 2},
    {state: [0, 0, 2, 1, 0, 1, 0, 0, 0], place: 4},
    {state: [0, 0, 2, 1, 2, 1, 1, 0, 0], place: 0},
    {state: [2, 1, 2, 1, 2, 1, 1, 0, 0], place: 8},
    {state: [1, 2, 1, 0, 2, 1, 0, 1, 2], place: 6},
];

export const checkNextMoveLossWin = (state: BoardState, checkPlayer: number) => {

    let checkPlayerNum = checkPlayer === 1 ? 2 : 4;
    
    //top horizontal
    if(state.board[0] + state.board[1] + state.board[2] === checkPlayerNum) {
          if (state.board[0] === 0 && state.board[1] !== 0 && state.board[2] !== 0) return 0;
          if (state.board[0] !== 0 && state.board[1] === 0 && state.board[2] !== 0) return 1;
          if (state.board[0] !== 0 && state.board[1] !== 0 && state.board[2] === 0) return 2;
    }

    //middle horizontal
    if(state.board[3] + state.board[4] + state.board[5] === checkPlayerNum) {
          if (state.board[3] === 0 && state.board[4] !== 0 && state.board[5] !== 0) return 3;
          if (state.board[3] !== 0 && state.board[4] === 0 && state.board[5] !== 0) return 4;
          if (state.board[3] !== 0 && state.board[4] !== 0 && state.board[5] === 0) return 5;
    }

    //lower horizontal
    if(state.board[6] + state.board[7] + state.board[8] === checkPlayerNum) {
        if (state.board[6] === 0 && state.board[7] !== 0 && state.board[8] !== 0) return 6;
        if (state.board[6] !== 0 && state.board[7] === 0 && state.board[8] !== 0) return 7;
        if (state.board[6] !== 0 && state.board[7] !== 0 && state.board[8] === 0) return 8;
    }

    //left vertical
    if(state.board[0] + state.board[3] + state.board[6] === checkPlayerNum) {
        if (state.board[0] === 0 && state.board[3] !== 0 && state.board[6] !== 0) return 0;
        if (state.board[0] !== 0 && state.board[3] === 0 && state.board[6] !== 0) return 3;
        if (state.board[0] !== 0 && state.board[3] !== 0 && state.board[6] === 0) return 6;
    }

    //middle vertical
    if(state.board[1] + state.board[4] + state.board[7] === checkPlayerNum) {
        if (state.board[1] === 0 && state.board[4] !== 0 && state.board[7] !== 0) return 1;
        if (state.board[1] !== 0 && state.board[4] === 0 && state.board[7] !== 0) return 4;
        if (state.board[1] !== 0 && state.board[4] !== 0 && state.board[7] === 0) return 7;
    }

    //right vertical
    if(state.board[2] + state.board[5] + state.board[8] === checkPlayerNum) {
        if (state.board[2] === 0 && state.board[5] !== 0 && state.board[8] !== 0) return 2;
        if (state.board[2] !== 0 && state.board[5] === 0 && state.board[8] !== 0) return 5;
        if (state.board[2] !== 0 && state.board[5] !== 0 && state.board[8] === 0) return 8;
    }
    //left down cross
    if(state.board[0] + state.board[4] + state.board[8] === checkPlayerNum) {
        if (state.board[0] === 0 && state.board[4] !== 0 && state.board[8] !== 0) return 0;
        if (state.board[0] !== 0 && state.board[4] === 0 && state.board[8] !== 0) return 4;
        if (state.board[0] !== 0 && state.board[4] !== 0 && state.board[8] === 0) return 8;
    }
    //right down cross
    if(state.board[2] + state.board[4] + state.board[6] === checkPlayerNum) {
        if (state.board[2] === 0 && state.board[4] !== 0 && state.board[6] !== 0) return 2;
        if (state.board[2] !== 0 && state.board[4] === 0 && state.board[6] !== 0) return 4;
        if (state.board[2] !== 0 && state.board[4] !== 0 && state.board[6] === 0) return 6;
    }

    return -1;
};

export const computeAIMove = (state: BoardState) => {
    
    let winIndex = checkNextMoveLossWin(state, 2);
    if(winIndex > -1) {
        return placePiece(state, winIndex);
    }

    let avoidLossIndex = checkNextMoveLossWin(state, 1);
    if(avoidLossIndex > -1) {
        return placePiece(state, avoidLossIndex);
    }

    let found = AI_MOVES.filter((x) => x.state.every((n, index) => n == state.board[index]));

    if(found.length > 0) {
        let pickIndex = Math.floor(Math.random() * found.length);
        return placePiece(state, found[pickIndex].place)
    }

    //pick a random spot for now
    let indexes: number[] = [];
    state.board.forEach((x, index) => { if(x === 0) indexes.push(index) });
    let indexToUse = indexes[Math.floor(Math.random() * indexes.length)];
    return placePiece(state, indexToUse);
}

export const placePiece = (state: BoardState, boardUpdateNum: number) => {
    let newState = {...state};
    if(state.board[boardUpdateNum] == 0 && state.ingame) {
        const newBoard = [...state.board];
        let history = [...state.history];

        if(state.turn === 0) {
            history.push({state: [...state.board], place: boardUpdateNum});
        }

        newBoard[boardUpdateNum] = state.turn + 1;
        newState = {
            ...state,
            board: newBoard, 
            turn: state.turn == 0 ? 1 : 0,
            history: history,
        };
    }

    return newState;
}

export const checkDraw = (boardState: BoardState) => {
    if(boardState.ingame) {
        const remainingCells = boardState.board.filter((x) => x == 0);
        if(remainingCells.length === 0) {
            convertAdd(boardState.history);
            return {
               ...boardState,
               ingame: false,      
            }
        }
    }

    return null;
};

export const convertAdd = (history: BoardHistory[]) => {

    let historyAdd: BoardHistory[] = [];

    history.forEach((x) => {

        x.state = x.state.map((xx) => xx == 2 ? 1 : xx == 1 ? 2 : 0);

        let found = AI_MOVES.filter((n) => n.state.every((t, index) => t == x.state[index]));
        let found2 = found.filter((t) => t.place === x.place);

        if(found2 && found2.length === 0) {
            historyAdd.push(x);
        }

    });

    //console.log(historyAdd);
};

export const checkWin = (boardState: BoardState) => {
    if(boardState.ingame) {
        let newState = {...boardState};
        let foundWin = false;
        let winner = 0;
        let boardLight = [...boardState.lightUpBoard];
  
        //top horizontal
        if(boardState.board[0] == boardState.board[1]
          && boardState.board[1] == boardState.board[2]
          && boardState.board[2] != 0)
        {
            boardLight[0] = true;
            boardLight[1] = true;
            boardLight[2] = true;
            winner = boardState.board[0];
            foundWin = true;
        }
        //middle horizontal
        else if(boardState.board[3] == boardState.board[4]
          && boardState.board[4] == boardState.board[5]
          && boardState.board[5] != 0)
        {
            boardLight[3] = true;
            boardLight[4] = true;
            boardLight[5] = true;
            winner = boardState.board[3];
            foundWin = true;
        }
        //lower horizontal
        else if(boardState.board[6] == boardState.board[7]
          && boardState.board[7] == boardState.board[8]
          && boardState.board[8] != 0)
        {
            boardLight[6] = true;
            boardLight[7] = true;
            boardLight[8] = true;
            winner = boardState.board[6];
            foundWin = true;
        }
        //left vertical
        if(boardState.board[0] == boardState.board[3]
          && boardState.board[3] == boardState.board[6]
          && boardState.board[6] != 0)
        {
            boardLight[0] = true;
            boardLight[3] = true;
            boardLight[6] = true;
            winner = boardState.board[0];
            foundWin = true;
        }
        //middle vertical
        else if(boardState.board[1] == boardState.board[4]
          && boardState.board[4] == boardState.board[7]
          && boardState.board[7] != 0)
        {
            boardLight[1] = true;
            boardLight[4] = true;
            boardLight[7] = true;
            winner = boardState.board[1];
            foundWin = true;
        }
        //right vertical
        else if(boardState.board[2] == boardState.board[5]
          && boardState.board[5] == boardState.board[8]
          && boardState.board[8] != 0)
        {
            boardLight[2] = true;
            boardLight[5] = true;
            boardLight[8] = true;
            winner = boardState.board[2];
            foundWin = true;
        }
        //cross left top vertical
        else if(boardState.board[0] == boardState.board[4]
          && boardState.board[4] == boardState.board[8]
          && boardState.board[8] != 0)
        {
            boardLight[0] = true;
            boardLight[4] = true;
            boardLight[8] = true;
            winner = boardState.board[0];
            foundWin = true;
        }
        //cross right top vertical
        else if(boardState.board[2] == boardState.board[4]
          && boardState.board[4] == boardState.board[6]
          && boardState.board[6] != 0)
        {
            boardLight[2] = true;
            boardLight[4] = true;
            boardLight[6] = true;
            winner = boardState.board[2];
            foundWin = true;
        }
  
        if(foundWin) {
          if(winner == 1) convertAdd(newState.history);

          newState.lightUpBoard = boardLight;
          newState.ingame = false;
          newState.score = [winner == 1 ? newState.score[0] + 1 : newState.score[0], winner == 2 ? newState.score[1] + 1 : newState.score[1]];
          return newState;
        }
    }
    
    return null;
};

export const nextGame = (state: BoardState) => {
    let newState = {...state};
    if(!state.ingame && state.round < MAX_ROUND) {
        newState = {
            ...state,
            ingame: true,
            board: [0,0,0,0,0,0,0,0,0],
            turn: state.lastTurn == 0 ? 1 : 0,
            lastTurn: state.lastTurn == 0 ? 1 : 0,
            round: state.round + 1,
            lightUpBoard: [false,false,false,false,false,false,false,false,false],
            history: [],
        };
    }

    return newState;
};
