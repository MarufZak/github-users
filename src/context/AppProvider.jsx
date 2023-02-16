import axios from 'axios';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import '../axios/interceptors';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const setDarkTheme = () => {
    localStorage.setItem('theme', 'dark');
    setTheme('dark');
  };

  const setLightTheme = () => {
    localStorage.setItem('theme', 'light');
    setTheme('light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    handleSubmit('marufzak');
  }, []);

  const handleSubmit = async (user) => {
    setIsLoading(true);
    try {
      const response = await axios(
        `https://api.github.com/users/${user}`
      );
      const data = response.data;

      console.log(data);

      setData(data);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  // useMemo is used for possible future changes updates.
  const value = {
    theme,
    setLightTheme,
    setDarkTheme,
    isLoading,
    handleSubmit,
    data,
    isError,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
