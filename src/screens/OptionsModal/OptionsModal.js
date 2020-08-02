import React, {useCallback} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Modal from 'react-native-modal';
import {deleteWord} from '../../services/vocabulary';
import {vocabularyStoreManager} from '../../utils';
import {useDispatch} from 'react-redux';
import {SET_VOCABULARY} from '../../actions/vocabulary';

export const OptionsModal = ({isVisible, onClose, word}) => {
  const dispatch = useDispatch();

  const onDeletePressed = useCallback(async () => {
    try {
      await deleteWord(word);
      const words = await vocabularyStoreManager.getWords();
      dispatch({type: SET_VOCABULARY, payload: {words}});
      onClose();
    } catch (error) {
      console.log('Error', error);
    }
  }, [word]);

  return (
    <Modal isVisible={isVisible} onClose={onClose} onBackButtonPress={onClose}>
      <View style={{backgroundColor: '#fff', padding: 16, borderRadius: 8}}>
        <TouchableOpacity onPress={onDeletePressed}>
          <View>
            <Text>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
