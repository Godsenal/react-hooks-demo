import { useContext } from 'react';
import { context } from '.';

export default function useConnect(mapState, mapDispatch) {
  const { state, dispatch } = useContext(context);
  const cs = mapState ? mapState(state) : { state };
  const cd = mapDispatch ? mapDispatch(dispatch) : { dispatch };
  return {
    ...cs,
    ...cd,
  };
};
