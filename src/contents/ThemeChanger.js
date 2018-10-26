import React, { useContext } from 'react';
import themeContext from 'themeContext';

const ThemeChanger = () => {
  const { theme, changeTheme } = useContext(themeContext);
  const nextTheme = (theme === 'dark' ? 'default' : 'dark');
  return (
    <>
      <p>useContext를 이용한 테마 체인저</p>
      <button onClick={() => changeTheme(nextTheme)}>set to {nextTheme} mode</button>
    </>
  )
}

export default ThemeChanger;
