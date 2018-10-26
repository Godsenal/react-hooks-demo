import React, { useState } from 'react';
import { Content, Counter, ThemeChanger } from './content';
import ThemeContext from './ThemeContext';

const getStyleByTheme = (theme) => {
  return {
    color: theme === 'dark' ? '#CACCCE' : 'black',
    backgroundColor: theme === 'dark' ? '#2F3437' : 'white',
  }
};

function App() {
  const [theme, changeTheme] = useState('default');
  return (
    <div style={{
        width: '100vw',
        height: '100vh',
        ...getStyleByTheme(theme)
      }}>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <h1>React hook demo</h1>
        <Content title="counter" content={<Counter />} />
        <Content title="theme changer" content={<ThemeChanger />} />
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
