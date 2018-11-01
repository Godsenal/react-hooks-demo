import { useState, useEffect } from 'react';
import { useConnect } from 'kind-of-redux';

const useMousePos = () => {
  const [pos, changePos] = useState({ x: 0, y: 0 });
  const { dispatch } = useConnect();
  // hook 안에서는 hook이 사용 가능!
  const handleMouseMove = e => changePos({ x: e.clientX, y: e.clientY });
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    dispatch({
      type: 'ADD_LOG',
      log: 'Add mousemove event listener using custom Effect.',
    });
    return () => {
      // handleMouse가 초기랑 다르지 않는가라고 생각할 수 있지만,
      // 애초에 이 useMousePos 자체가 계속 새로 호출될거고,
      // useEffect는 아마 내부적으로 처음 등록된 함수만 가지고 있을 것이다. (두 번째 인자를 []로 주면)
      // 그래서 맨 처음 호출됐을 때 handleMouseMove를 가지고 있을 것임.
      window.removeEventListener('mousemove', handleMouseMove);
      dispatch({
        type: 'ADD_LOG',
        log: 'Remove mousemove event listener using custom Effect.',
      });
    };
  }, []);
  // useEffect의 두 번째 인자는 업데이트의 매개가 될 변수의 배열.
  // 이 안에있는 변수가 바뀌지 않으면 업데이트마다 실행되지 않음.
  // 그러므로 비어있는 배열을 줄 경우 mount시 unmount시 한 번 씩만 실행.
  return pos;
};

export default useMousePos;
