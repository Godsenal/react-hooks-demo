import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

const ThemeChanger = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const nextTheme = (theme === 'dark' ? 'default' : 'dark');
  return (
    <>
      <button onClick={() => changeTheme(nextTheme)}>set to {nextTheme} mode</button>
    </>
  )
}

export default ThemeChanger;
