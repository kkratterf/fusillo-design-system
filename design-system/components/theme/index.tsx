'use client'

import '../../style/global.css'
import '../../style/foundations.css';
import '../../style/tokens.css';

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
    if (typeof window !== 'undefined' && window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      } else {
        return 'light';
      }
    } else {
      // Gestire il caso in cui window non è definito
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
