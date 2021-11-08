import {StyleSheet} from 'react-native';
import {colors, fontSizes} from '../utils/Variables';

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
    padding: 15,
    width: '90%',
    borderRadius: 20,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: fontSizes.small,
    color: colors.black,
    fontWeight: 'bold',
  },
});
export default styles;
