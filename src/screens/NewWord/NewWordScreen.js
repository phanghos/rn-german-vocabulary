import React, {useState, useCallback} from 'react';
import {View, TextInput, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RadioButton} from 'react-native-paper';
import {Button} from '../../components';
import {addWord} from '../../services/vocabulary';
import {Red} from '../../utils/constants';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {ADD_WORD} from '../../actions/vocabulary';

const RadioItem = ({text, value}) => (
  <View style={{flexDirection: 'row'}}>
    <Text style={{textAlignVertical: 'center'}}>{text}</Text>
    <RadioButton value={value} color={Red} />
  </View>
);

export const NewWordScreen = () => {
  const [word, setWord] = useState('');
  const [plural, setPlural] = useState('');
  const [gender, setGender] = useState('m');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onWordChanged = useCallback((text) => {
    setWord(text);
  }, []);

  const onPluralChanged = useCallback((text) => {
    setPlural(text);
  }, []);

  const onAddWordPressed = useCallback(async () => {
    const wordObj = {
      word,
      plural,
      gender,
    };
    console.log('Will add', wordObj);

    try {
      setLoading(true);
      await addWord(wordObj);
      dispatch({type: ADD_WORD, payload: {word: wordObj}});
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      setLoading(false);
    }
  }, [word, plural, gender]);

  return (
    <View style={styles.container}>
      <TextInput value={word} placeholder="Word" onChangeText={onWordChanged} />
      <TextInput
        value={plural}
        placeholder="Plural"
        onChangeText={onPluralChanged}
      />
      <RadioButton.Group onValueChange={setGender} value={gender}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <RadioItem text="Masculine" value="m" />
          <RadioItem text="Feminine" value="f" />
          <RadioItem text="Neuter" value="n" />
        </View>
      </RadioButton.Group>
      <Button
        text="Add Word"
        onPress={onAddWordPressed}
        loading={loading}
        style={{alignSelf: 'center', marginTop: 32}}
      />
    </View>
  );
};
