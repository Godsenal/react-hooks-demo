import { createContext } from 'react';

const ThemeContext = createContext({
  theme: 'default',
  toggleTheme: () => {},
});

export default ThemeContext;
