import React from 'react';
import {View, Text} from 'react-native';

const definiteArticleMap = {
  m: 'Der',
  f: 'Die',
  n: 'Das',
};

export const Article = ({gender, style}) => {
  return (
    <>
      <Text style={style}>{`${definiteArticleMap[gender]}`}</Text>
    </>
  );
};
