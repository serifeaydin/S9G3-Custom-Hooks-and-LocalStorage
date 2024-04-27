import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue = false) => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return [darkMode, toggleDarkMode];
};
