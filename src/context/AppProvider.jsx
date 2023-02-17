import axios from 'axios';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import '../axios/interceptors';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [data, setData] = useState({});
  const [error, setError] = useState({ state: false, status: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingLocked, setIsFetchingLocked] = useState(false);

  const setDarkTheme = () => {
    localStorage.setItem('theme', 'dark');
    setTheme('dark');
  };

  const setLightTheme = () => {
    localStorage.setItem('theme', 'light');
    setTheme('light');
  };


  const handleSubmit = async (user) => {
    setIsLoading(true);
    setError({ state: false, status: 0 });

    try {
      const response = await axios(
        `https://api.github.com/users/${user}`
      );
      const data = response.data;
      setData(data);
    } catch (error) {
      console.log(error);
      setError({ state: true, status: error.response.status });
    }

    setIsLoading(false);
    setIsFetchingLocked(true);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    handleSubmit('marufzak');
  }, []);

  useEffect(() => {
    if (isFetchingLocked) {
      let timeout = setTimeout(() => {
        setIsFetchingLocked(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isFetchingLocked]);

  const value = {
    theme,
    setLightTheme,
    setDarkTheme,
    isLoading,
    handleSubmit,
    data,
    error,
    isFetchingLocked
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
