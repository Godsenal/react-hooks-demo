import React, { useReducer } from 'react';
import { stateContext, dispatchContext } from './context';

// state는 바뀌는 값이고 dispatch는 바뀌지 않는 값이다.
// 둘을 같은 컨텍스트에 넣어주면 state로 인해 dispatch만 사용할때도 항상 re-render를 유발하므로,
// 둘을 분리시킨다.
const Provider = ({ children, store }) => {
  const { initialState, reducer } = store;
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>{children}</stateContext.Provider>
    </dispatchContext.Provider>
  );
};

export default Provider;
