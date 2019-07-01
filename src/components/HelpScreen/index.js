import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import ScreenLayout from '../ScreenLayout';
import {
  switchScreenToMainConsole,
  addToTerminalDisplay,
} from '../../store/actions';
import colors from '../../utils/colors';

const HelpLayout = styled.div`
  padding: 1em;
  width: 100%;
  height: 100%;
  font-size: 1.5em;
  overflow-y: scroll;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background: none;
  color: inherit;
  font: inherit;
  outline: inherit;
  border: 1px solid ${colors.blue};
  padding: 1rem 2rem;

  &:hover {
    box-shadow: 0.5rem 0.5rem ${colors.yellow};
  }

  &:focus {
    border-color: ${colors.yellow};
  }
`;

const HelpScreen = () => {
  const dispatch = useDispatch();
  const helpDiv = useRef();

  const handleOnClick = () => {
    dispatch(switchScreenToMainConsole());
    dispatch(
      addToTerminalDisplay({
        output: 'Enjoy the game!',
      })
    );
  };

  useEffect(() => {
    helpDiv.current.focus();
  });

  return (
    <ScreenLayout>
      <HelpLayout tabIndex="-1" ref={helpDiv}>
        <h1 style={{ fontSize: '1.2em', color: colors.pink }}>HELP</h1>
        <h2 style={{ fontSize: '1.1em' }}>commands</h2>
        <ul>
          <li>
            <div>
              <p style={{ color: colors.yellow }}>create-runner [name]</p>
              <p>
                allows the player to create a runner. a runner must be created
                to perform most actions in the game.
              </p>
            </div>
          </li>
          <li>
            <div>
              <p style={{ color: colors.yellow }}>connect [corp]</p>
              <p>
                connects the player to a desired enemy corporation. if no
                arugment is provided, lists the possible corporations.
              </p>
            </div>
          </li>
          <li>
            <div>
              <p style={{ color: colors.yellow }}>shop</p>
              <p>
                displays the shop and allows the player to purchase programs and
                upgrades
              </p>
            </div>
          </li>
          <li>
            <div>
              <p style={{ color: colors.yellow }}>show [command]</p>
              <div>
                <p>commands:</p>
                <ul>
                  <li>runner</li>
                  <li>credits</li>
                  <li>memory</li>
                  <li>programs</li>
                  <li>firewall</li>
                  <li>all</li>
                </ul>
                <p>
                  shows various stats about the player. running with no
                  arguments shows what each command does.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <p style={{ color: colors.yellow }}>reset [runner]</p>
              <p>allows player to reset to the beginning of the game.</p>
            </div>
          </li>
          <li>
            <div>
              <p style={{ color: colors.yellow }}>help</p>
              <p>displays the help screen.</p>
            </div>
          </li>
        </ul>
        <h2 style={{ fontSize: '1.1em', color: colors.pink }}>How to Start</h2>
        <p>
          use the create-runner command to make a name and head to the store to
          purchase programs and upgrades. programs are required to make runs, so
          be sure you buy at least one! After making your purchases, use the
          connect command to connect to an enemy corporation and start your run
        </p>
        <h2 style={{ fontSize: '1.1em', color: colors.pink }}>Making a Run</h2>
        <p>
          while making a run, the only programs you'll have access to are the
          programs that you've purchased. each program will have a memory cost
          and a time to execution (TTE). you can only have so many programs
          loading in your memory buffer be you'll have to wait to load another.
          once the TTE countdown is complete, the program will execute against
          the target of your run.
        </p>
        <p>
          to win, you must break through the target's firewall. you'll only have
          a minute to do it, so you'll have to type fast. the target will also
          run programs against you, so if your firewall is breached, it's
          gameover man!
        </p>
        <div style={{ textAlign: 'center' }}>
          <Button type="button" onClick={handleOnClick}>
            Ok
          </Button>
        </div>
      </HelpLayout>
    </ScreenLayout>
  );
};

export default HelpScreen;
