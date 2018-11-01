import React from 'react';
import { useConnect } from 'kind-of-redux';

const mapState = state => ({
  count: state.count,
});
const mapDispatch = dispatch => {
  const dispatchWithLog = action => {
    dispatch({ type: 'ADD_LOG', log: `dispatch - ${action.type}` });
    dispatch(action);
  };
  return {
    increment: () => dispatchWithLog({ type: 'increment' }),
    decrement: () => dispatchWithLog({ type: 'decrement' }),
    reset: () => dispatchWithLog({ type: 'reset' }),
  };
};

const CustomRedux = () => {
  const { count, increment, decrement, reset } = useConnect(
    mapState,
    mapDispatch,
  );
  return (
    <>
      <p>useReducer와 useContext를 이용한 간단한 리덕스</p>
      <span
        style={{
          fontSize: 24,
          margin: '1rem',
        }}
      >
        {count}
      </span>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => reset()}>reset</button>
    </>
  );
};

export default CustomRedux;
