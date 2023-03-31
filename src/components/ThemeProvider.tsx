import React, { createContext, useContext, useEffect, useState } from 'react';


export const ThemeContext = createContext('night');

export function ThemeProvider(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  const [theme, setTheme] = useState(getInitialTheme);

  function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : { mode: 'night' };
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    setTheme(theme)
  }, [theme]);

  const changeTheme = (value: string) => {
    setTheme(value);
}

  return (
    <ThemeContext.Provider value={[theme, changeTheme]}>
      {props.children}

      </ThemeContext.Provider>
  );
}
