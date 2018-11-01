import React, { useMemo, useState } from 'react';
import { useConnect } from 'kind-of-redux';

const VAL = 50;
const factorial = n => {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
const bold = {
  fontWeight: 600,
};
const Memoization = () => {
  let withMemoize = true;
  const [, update] = useState(null);
  const { dispatch } = useConnect();
  const getExpensiveValue = () => {
    withMemoize = false;
    return VAL ? factorial(VAL) : '';
  };
  const fac = useMemo(() => getExpensiveValue(50), [VAL]);
  if (withMemoize) {
    dispatch({ type: 'ADD_LOG', log: 'Get memoized value using useMemo.' });
  }
  return (
    <>
      <p>useMemo를 사용한 팩토리얼 구하기</p>
      <div>
        <span style={{ ...bold, fontSize: 20 }}>50!</span>
      </div>
      <div>
        <span style={bold}>답: </span>
        <span>
          {fac}
          {withMemoize ? '(memoized!)' : ''}
        </span>
      </div>
      <div style={{ marginTop: 10 }}>
        <button onClick={() => update()}>
          re-render 후 memoize된 value를 사용하는지 확인.
        </button>
      </div>
    </>
  );
};

export default Memoization;
