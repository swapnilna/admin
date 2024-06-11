import { useState } from "react";

export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(keyName);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error("Error reading localStorage key:", keyName, error);
      return defaultValue;
    }
  });

  const setValue = (value) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error("Error setting localStorage key:", keyName, error);
    }
  };

  return [storedValue, setValue];
};
