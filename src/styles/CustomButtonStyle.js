import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {colors, fontSizes} from '../utils/Variables';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginHorizontal: 0,
    paddingVertical: 12,
    width: '45%',
    borderRadius: 6,
    marginTop: 10,
    // backgroundColor: colors.blue,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: fontSizes.small,
    color: colors.white,
    fontWeight: '500',
  },
});
export default styles;
