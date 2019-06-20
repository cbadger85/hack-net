import React, { useEffect, useState } from 'react';
import figlet from 'figlet';
import { promisify } from 'es6-promisify';
import styled from 'styled-components';

const FigletWrapper = styled.div`
  white-space: pre;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const getFigletPromise = inputText => {
  figlet.defaults({ fontPath: 'assets/fonts' });

  const figletPromise = promisify(figlet);

  const text = figletPromise(inputText, 'isometric1');

  return text;
};

const Figlet = ({ text }) => {
  const [figletText, setFigletText] = useState('');

  useEffect(() => {
    const getFiglet = () => getFigletPromise(text);

    getFiglet().then(data => setFigletText(data));
  }, [text]);

  console.log(figletText);

  return (
    <FigletWrapper>
      <div>{`${figletText}`}</div>
    </FigletWrapper>
  );
};

export default Figlet;
