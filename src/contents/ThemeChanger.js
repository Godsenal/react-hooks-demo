import React, { memo, useContext } from 'react';
import themeContext from 'themeContext';
import { useConnect } from 'kind-of-redux';

const ThemeChanger = () => {
  const { theme, changeTheme } = useContext(themeContext);
  const { dispatch } = useConnect();
  const nextTheme = theme === 'dark' ? 'default' : 'dark';
  const changeThemeWithLog = () => {
    dispatch({
      type: 'ADD_LOG',
      log: `change theme to ${nextTheme} using useContext.`,
    });
    changeTheme(nextTheme);
  };
  return (
    <>
      <p>useContext를 이용한 테마 체인저</p>
      <button onClick={() => changeThemeWithLog()}>
        set to {nextTheme} mode
      </button>
    </>
  );
};
export default memo(ThemeChanger);
