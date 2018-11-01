import React from 'react';
import useMousePos from './useMousePos';

const MouseWatcher = () => {
  const { x, y } = useMousePos();
  return (
    <>
      <p>Custom effect를 이용한 마우스 포지션 watcher</p>
      <div>x: {x}</div>
      <div>y: {y}</div>
    </>
  );
};

export default MouseWatcher;
