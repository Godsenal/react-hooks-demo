import { createContext } from 'react';

const themeContext = createContext({
  theme: 'default',
  toggleTheme: () => {},
});

export default themeContext;
