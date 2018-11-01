const initialState = {
  count: 0,
  logs: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'reset':
      return { ...state, count: initialState.count };
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'ADD_LOG':
      return { ...state, logs: [...state.logs, action.log] };
    case 'RESET_LOG':
      return { ...state, logs: [] };
    default:
      return state;
  }
}

export default { initialState, reducer };
