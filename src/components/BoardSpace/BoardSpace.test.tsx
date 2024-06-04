import { render, screen } from '@testing-library/react';
import BoardSpace from './BoardSpace';

test('renders', () => {
  render(<BoardSpace boardNum={0} currentNum={0} lightBoard={false} disabled={false} updateBoard={() => {}}/>);
});


test('renders light board', async () => {
  render(<BoardSpace boardNum={0} currentNum={0} lightBoard={true} disabled={false} updateBoard={() => {}}/>);
  const board0 = await screen.findByTestId("board0");
  expect(board0.className).toEqual("lightBoardSpace boardSpace");
});

test('renders cross', async () => {
  render(<BoardSpace boardNum={0} currentNum={1} lightBoard={false} disabled={false} updateBoard={() => {}}/>);
  const board0 = await screen.findByTestId("board0");
  expect(board0.innerHTML).toEqual("X");
});

test('renders circle', async () => {
  render(<BoardSpace boardNum={0} currentNum={2} lightBoard={false} disabled={false} updateBoard={() => {}}/>);
  const board0 = await screen.findByTestId("board0");
  expect(board0.innerHTML).toEqual("O");
});

