import React, { useState } from 'react';
import { useConnect } from 'kind-of-redux';

const mapDispatch = dispatch => ({
  addLog: log => dispatch({ type: 'ADD_LOG', log }),
});
function Counter() {
  const [count, counter] = useState(0);
  const { addLog } = useConnect(null, mapDispatch);
  const counterWithLog = nextCount => {
    addLog(`update count to ${nextCount} using useState.`);
    counter(nextCount);
  };
  return (
    <>
      <p>useState를 이용한 카운터</p>
      <span
        style={{
          fontSize: 24,
          margin: '1rem',
        }}
      >
        {count}
      </span>
      <button onClick={() => counterWithLog(count + 1)}>+</button>
      <button onClick={() => counterWithLog(count - 1)}>-</button>
    </>
  );
}

export default Counter;
