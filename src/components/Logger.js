import React, { useEffect, useRef } from 'react';
import { useConnect } from 'kind-of-redux';

const mapState = state => ({
  logs: state.logs,
});
const mapDispatch = dispatch => ({
  resetLog: () => dispatch({ type: 'RESET_LOG' }),
});
const containerStyle = {
  position: 'fixed',
  width: 300,
  right: 50,
  padding: 10,
  borderRadius: 10,
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
};
const scrollStyle = {
  height: 200,
  overflowY: 'auto',
};
const Logger = () => {
  const { logs, resetLog } = useConnect(mapState, mapDispatch);
  const scrollEl = useRef(null);
  useEffect(
    () => {
      const el = scrollEl.current;
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    },
    [logs.length],
  );
  return (
    <div style={containerStyle}>
      <h3>Logger</h3>
      <div ref={scrollEl} style={scrollStyle}>
        {logs.length <= 0 ? (
          <div>유의미한 정보에 대한 로그</div>
        ) : (
          logs.map((log, i) => (
            <div key={i} style={{ fontWeight: 600, marginBottom: 5 }}>
              {log}
            </div>
          ))
        )}
        {}
      </div>
      <button
        style={{ width: '100%', margin: 'auto' }}
        onClick={() => resetLog()}
      >
        Clear
      </button>
    </div>
  );
};

export default Logger;
