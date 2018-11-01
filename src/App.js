import React, { useState } from 'react';
import { Footer, Header, Section } from 'components';
import themeContext from 'themeContext';

const defaultStyle = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
const getStyleByTheme = theme => {
  return {
    color: theme === 'dark' ? '#CACCCE' : 'black',
    backgroundColor: theme === 'dark' ? '#2F3437' : 'white',
  };
};

const App = () => {
  const [theme, changeTheme] = useState('default');
  return (
    <div
      style={{
        ...defaultStyle,
        ...getStyleByTheme(theme),
      }}
    >
      <themeContext.Provider value={{ theme, changeTheme }}>
        <Header />
        <Section />
        <Footer />
      </themeContext.Provider>
    </div>
  );
};

export default App;
