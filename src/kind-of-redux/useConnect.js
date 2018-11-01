import { useContext } from 'react';
import { dispatchContext, stateContext } from './context';

export default function useConnect(mapState = null, mapDispatch) {
  const state = useContext(mapState ? stateContext : {});
  // state는 바뀌므로 state를 안쓰는 컴포넌트에서도 rerender를 유발할 수 있다.
  // 따라서, mapState가 없는경우에는 context를 사용하지 않는다.
  const dispatch = useContext(dispatchContext);
  // dispatch는 바뀌지 않으므로, rerender를 발생시키지 않는다.
  const cs = mapState ? mapState(state) : {};
  const cd = mapDispatch ? mapDispatch(dispatch) : { dispatch };
  return {
    ...cs,
    ...cd,
  };
}
