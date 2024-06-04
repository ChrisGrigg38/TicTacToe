import { render, screen } from '@testing-library/react';
import Score from './Score';
import { act } from 'react';

test('renders ingame', async () => {
  act(() => {
    render(<Score score={[0,0]} round={1} ingame={true} nextGame={() => {}} />);
  });

  expect((await screen.findByTestId("roundText")).innerHTML).toEqual("Round 1");
  expect((await screen.findByTestId("myScore")).innerHTML).toEqual("Your score: 0");
  expect((await screen.findByTestId("computerScore")).innerHTML).toEqual("Computer score: 0");

});

test('renders not ingame', async () => {
  act(() => {
    render(<Score score={[0,0]} round={1} ingame={false} nextGame={() => {}} />);
  });

  expect(await screen.findByTestId("restartBut")).toBeInTheDocument();
  expect((await screen.findByTestId("myScore")).innerHTML).toEqual("Your score: 0");
  expect((await screen.findByTestId("computerScore")).innerHTML).toEqual("Computer score: 0");
  
});