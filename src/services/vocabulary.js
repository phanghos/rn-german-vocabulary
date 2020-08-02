import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import RNFetchBlob from 'react-native-fetch-blob';
import RNFS from 'react-native-fs';
import {vocabularyStoreManager} from '../utils';

const path = `${RNFS.DocumentDirectoryPath}/vocabulary.json`;

export const readJsonFile = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      await auth().signInAnonymously();
      const url = await storage().ref('vocabulary.json').getDownloadURL();

      RNFetchBlob.config({
        path,
      })
        .fetch('GET', url)
        .then(async (res) => {
          console.log('The file saved to ', res.path());
          const json = await res.json();
          resolve(json);
        });
    } catch (error) {
      reject();
    }
  });
};

const uploadJsonFile = async (words) => {
  return new Promise(async (resolve, reject) => {
    try {
      await RNFS.writeFile(path, JSON.stringify(words), 'utf8');
      console.log('FILE WRITTEN!');
      await auth().signInAnonymously();
      const fileRef = storage().ref('vocabulary.json');
      await fileRef.putFile(path);
      resolve();
    } catch (error) {
      reject();
    }
  });
};

export const resetJsonFile = async () => {
  return uploadJsonFile([]);
};

export const addWord = async (word) => {
  return new Promise(async (resolve, reject) => {
    try {
      let words = await vocabularyStoreManager.getWords();
      words = words.concat(word);
      words.sort((first, second) => first.word.localeCompare(second.word));
      await uploadJsonFile(words);
      await vocabularyStoreManager.setWords(words);
      resolve();
    } catch (error) {
      reject();
    }
  });
};

export const deleteWord = async (word) => {
  return new Promise(async (resolve, reject) => {
    try {
      let words = await vocabularyStoreManager.getWords();
      words = words.filter((item) => item.word !== word.word);
      // words.sort((first, second) => first.word.localeCompare(second.word));
      await uploadJsonFile(words);
      await vocabularyStoreManager.setWords(words);
      resolve();
    } catch (error) {
      reject();
    }
  });
};
