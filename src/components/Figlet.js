import React, { useEffect, useState } from 'react';
import figlet from 'figlet';
import { promisify } from 'es6-promisify';
import styled, { css } from 'styled-components';

import colors from '../utils/colors';

const FigletWrapper = styled.div`
  white-space: pre;
  color: ${props => props.color};
  ${props =>
    props.console &&
    css`
      margin: 1em 0 1em 2em;
    `}
`;

const getFigletPromise = (inputText, font) => {
  figlet.defaults({ fontPath: 'assets/fonts' });

  const figletPromise = promisify(figlet);

  const text = figletPromise(inputText, font);

  return text;
};

const Figlet = ({
  children,
  font = 'poison',
  color = colors.pink,
  isConsole,
}) => {
  const [figletText, setFigletText] = useState('');

  useEffect(() => {
    getFigletPromise(children, font).then(data => setFigletText(data));
  }, [children, font]);

  return (
    <FigletWrapper color={color} console={isConsole}>
      {figletText}
    </FigletWrapper>
  );
};

export default Figlet;
