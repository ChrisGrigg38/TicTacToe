import { render, screen, waitFor } from '@testing-library/react';
import Board from './Board';
import { act } from 'react';

test('renders board', () => {
  render(<Board />);
  const startBut = screen.getByTestId("restartBut")
  expect(startBut).toBeInTheDocument();
});

test('can start new game', async () => {
  render(<Board />);
  const startBut = screen.getByTestId("restartBut")
  expect(startBut).toBeInTheDocument();

  act(() => {
    startBut.click();
  });

  waitFor(() => {
    return screen.findByTestId("roundText");
  });

  const roundText = await screen.findByTestId("roundText");

  expect(roundText.innerHTML).toEqual("Round 1");
  
  const board0 = await screen.findByTestId("board0");

  await board0.click();
  
  expect(board0.innerHTML).toEqual("X");

});

const playBoard = async (boardElement: HTMLElement) => {
  expect(boardElement.innerHTML).toEqual("");
  await boardElement.click();
  expect(boardElement.innerHTML).toEqual("X");
  await new Promise((r) => setTimeout(r, 100));
}

const findNextPlayBoard = async (): Promise<HTMLElement> => {
   while(true) {
    const rnd = Math.floor((Math.random() * 30) % 9);
    const element = await screen.findByTestId("board" + rnd);
    if(element.innerHTML === "") {
      return element;
    }
  }
}

test('play full game', async () => {
  render(<Board />);
  const startBut = screen.getByTestId("restartBut")
  expect(startBut).toBeInTheDocument();

  await startBut.click();
  
  waitFor(() => {
    return screen.findByTestId("roundText");
  });

  const roundText = await screen.findByTestId("roundText");

  expect(roundText.innerHTML).toEqual("Round 1");
  
  const board0 = await screen.findByTestId("board0");
  await playBoard(board0);

  while(true) {
    const endGameBut = await screen.queryAllByTestId("restartBut");
    if(endGameBut.length > 0) break;

    const nextBoard = await findNextPlayBoard();
    await playBoard(nextBoard);
  }
});
