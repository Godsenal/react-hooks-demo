import React, { useReducer } from 'react';
import { context } from '.';

const Provider = ({ children, store }) => {
  const { initialState, reducer } = store;
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const dispatchWithLog = (action) => {
    console.log(`dispatched - ${Object.entries(action).map((entry) => `${entry[0]}: ${entry[1]}`)}`);
    dispatch(action);
  }
  return (
    <context.Provider value={{ state, dispatch: dispatchWithLog }}>
      { children }
    </context.Provider>
  );
};

export default Provider;
