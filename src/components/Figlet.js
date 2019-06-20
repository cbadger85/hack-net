import React, { useEffect, useState } from 'react';
import figlet from 'figlet';
import { promisify } from 'es6-promisify';
import styled from 'styled-components';

import colors from '../utils/colors';

const FigletWrapper = styled.div`
  white-space: pre;
  margin: 1em 0 1em 4em;
`;

const FigletText = styled.span`
  color: ${colors.pink};
`;

const getFigletPromise = (inputText, font) => {
  figlet.defaults({ fontPath: 'assets/fonts' });

  const figletPromise = promisify(figlet);

  const text = figletPromise(inputText, font);

  return text;
};

const Figlet = ({ children, font = 'poison' }) => {
  const [figletText, setFigletText] = useState('');

  useEffect(() => {
    getFigletPromise(children, font).then(data => setFigletText(data));
  }, [children, font]);

  console.log(figletText);

  return (
    <FigletWrapper>
      <FigletText>{figletText}</FigletText>
    </FigletWrapper>
  );
};

export default Figlet;
