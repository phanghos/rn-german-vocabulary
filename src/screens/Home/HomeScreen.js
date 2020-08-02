import React, {useState, useCallback} from 'react';
import {FlatList} from 'react-native';
import {WordItem} from '../../components/WordItem/WordItem';
import {useSelector} from 'react-redux';
import {OptionsModal} from '../OptionsModal';

const keyExtractor = (item) => item.word;

export const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedWord, setSelectedWord] = useState();
  const words = useSelector(({vocabulary}) => vocabulary.words);

  const onWordPressed = useCallback((word) => {
    setSelectedWord(word);
    setModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const renderItem = useCallback(({item}) => {
    return (
      <WordItem
        word={item}
        onPress={() => onWordPressed(item)}
        style={{marginHorizontal: 16, marginVertical: 8}}
      />
    );
  }, []);

  return (
    <>
      <FlatList
        contentContainerStyle={{paddingVertical: 8}}
        data={words}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <OptionsModal
        isVisible={isModalVisible}
        onClose={closeModal}
        word={selectedWord}
      />
    </>
  );
};
