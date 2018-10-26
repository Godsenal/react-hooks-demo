import React from 'react';
import { useConnect } from 'kind-of-redux';

const mapState = state => ({
  count: state.count,
});
const mapDispatch = dispatch => ({
  increment: () => dispatch({ type: 'increment'}),
  decrement: () => dispatch({ type: 'decrement'}),
  reset: () => dispatch({ type: 'reset' }),
});

const CustomRedux = () => {
  const { count, increment, decrement, reset } = useConnect(mapState, mapDispatch);
  return (
    <>
      <p>useReducer와 useContext를 이용한 간단한 리덕스</p>
      <span style={{
        fontSize: 24,
        margin: '1rem'
      }}>{count}</span>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => reset()}>reset</button>
    </>
  )
}

export default CustomRedux;
