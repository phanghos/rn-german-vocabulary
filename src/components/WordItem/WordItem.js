import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Article} from '../Article/Article';
import styles from './styles';

export const WordItem = ({word: {word, plural, gender}, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <View style={style}>
        <Text style={styles.word}>
          <Article gender={gender} style={{fontWeight: 'bold'}} /> {word}
        </Text>
        <Text style={{fontStyle: 'italic'}}>
          Pl: <Text style={{fontStyle: 'normal'}}>{`${plural}`}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};
