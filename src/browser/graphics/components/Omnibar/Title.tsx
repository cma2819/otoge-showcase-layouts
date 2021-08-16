import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styled from 'styled-components';
import './fade.css';

type ShowType = 'name'|'hashtag';
const showTypes: ShowType[] = ['name', 'hashtag'];

const CHANGE_INTERVAL_SEC = 30;

const Container = styled.div`
  font-family: 'Iceland', 'Noto Sans JP', sans-serif, cursive;
`;

export const Title = () => {
  const [ showTitle, setShowTitle ] = useState<ShowType>('name');
  const refShowTitle = useRef(showTitle);

  useEffect(() => {
    refShowTitle.current = showTitle;
  }, [showTitle]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const length = showTypes.length;
      const index = showTypes.indexOf(refShowTitle.current) || 0;
      
      const newTitle = showTypes[(index + 1) % length];
      setShowTitle(newTitle);
    }, CHANGE_INTERVAL_SEC * 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition key={showTitle}
        addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
        classNames='fade'
      >
        <Container>
          {
            showTitle === 'name' && (
              <div>
              Otoge Showcase Marathon
              </div>
            )
          }
          {
            showTitle === 'hashtag' && (
              <div>
              #OtogeShowcase
              </div>
            )
          }
        </Container>
      </CSSTransition>
    </SwitchTransition>
  );
}