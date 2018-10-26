import React, { useState } from 'react';

function Counter() {
  const [count, counter] = useState(0);

  return (
    <>
      <span style={{
        fontSize: 24,
        margin: '1rem'
      }}>{count}</span>
      <button onClick={() => counter(count + 1)}>+</button>
      <button onClick={() => counter(count - 1)}>-</button>
    </>
  )
}

export default Counter;
