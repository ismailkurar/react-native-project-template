import { AsyncStorage } from 'react-native';

export const STORAGE_KEYS = {
  // Use unique keys
};

class Storage {
  setItem = (key, value) => AsyncStorage.setItem(key, value);

  getItem = (key) => AsyncStorage.getItem(key);

  removeItem = (key) => AsyncStorage.removeItem(key);
}

export default new Storage();
