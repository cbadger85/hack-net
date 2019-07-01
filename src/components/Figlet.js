import React, { useEffect, useState } from 'react';
import figlet from 'figlet';
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

const Figlet = ({
  children,
  font = 'poison',
  color = colors.pink,
  isConsole,
}) => {
  const [figletText, setFigletText] = useState('');

  useEffect(() => {
    figlet.defaults({ fontPath: 'assets/fonts' });

    figlet(children, font, function(err, text) {
      if (err) {
        return;
      }

      setFigletText(text);
    });
  }, [children, font]);

  return (
    <FigletWrapper color={color} console={isConsole}>
      {figletText}
    </FigletWrapper>
  );
};

export default Figlet;
