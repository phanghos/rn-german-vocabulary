import RNFS from 'react-native-fs';
import {readJsonFile, resetJsonFile} from '../services/vocabulary';
import {vocabularyStoreManager} from './VocabularyStorageManager';

export const init = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      // const exists = RNFS.exists(
      //   `${RNFS.DocumentDirectoryPath}/vocabulary.json`,
      // );
      // if (!exists)
      const words = await readJsonFile();
      words.sort((first, second) => first.word.localeCompare(second.word));
      // const words = await vocabularyStoreManager.getWords();
      console.log('Words', words);
      vocabularyStoreManager.setWords(words);
      // await resetJsonFile();
      // vocabularyStoreManager.setWords([]);
      resolve();
    } catch (error) {
      resolve();
    }
  });
};
