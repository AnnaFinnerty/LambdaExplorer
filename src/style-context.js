import React from 'react';

export const styles = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
    lambdaWidth: 60,
    concurrencyWidth: 40,
  };
  
  export const ThemeContext = React.createContext(
    styles.dark 
  );