import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ViewPropTypes,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export const Button = ({text, onPress, loading, style}) => (
  <TouchableOpacity
    disabled={loading}
    onPress={onPress}
    style={loading ? styles.disabled : undefined}>
    <View style={[styles.container, style]}>
      {loading && (
        <ActivityIndicator size="small" color={'#fff'} style={styles.spinner} />
      )}
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  style: ViewPropTypes.style,
};

Button.defaultProps = {
  loading: false,
  style: undefined,
};
