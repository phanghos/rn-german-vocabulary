import AsyncStorage from '@react-native-community/async-storage';

const key = 'rn-german-vocabulary';

class VocabularyStoreManager {
  getWords = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);
        resolve(jsonValue !== null ? JSON.parse(jsonValue) : []);
      } catch (e) {
        // error reading value
        reject([]);
      }
    });
  };

  setWords = async (words) => {
    return new Promise(async (resolve, reject) => {
      try {
        const jsonValue = JSON.stringify(words);
        await AsyncStorage.setItem(key, jsonValue);
        resolve();
      } catch (e) {
        // saving error
        reject();
      }
    });
  };
}

export const vocabularyStoreManager = new VocabularyStoreManager();
