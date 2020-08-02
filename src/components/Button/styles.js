import {StyleSheet} from 'react-native';
import {Red} from '../../utils/constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: Red,
    paddingHorizontal: 24,
    paddingVertical: 6,
    borderRadius: 7,
    marginTop: 32,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  spinner: {
    marginRight: 8,
  },
  disabled: {
    opacity: 0.5,
  },
});
