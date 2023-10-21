'use client'

import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeProvider: React.FC<{
  theme?: Theme;
  children: ReactNode;
}> = ({ theme, children }) => {
  
  const getSystemTheme = (): Theme => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark';
    } else {
      return 'light';
    }
  };

  const [currentTheme, setCurrentTheme] = useState<Theme>(
    theme || getSystemTheme()
  );

  useEffect(() => {
    setCurrentTheme(theme || getSystemTheme());
  }, [theme]);

  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    return 'light'; // Imposta il tema su 'light' come valore predefinito
  }
  
  return theme;
};
