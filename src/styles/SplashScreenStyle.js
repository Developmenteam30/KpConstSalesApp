import {StyleSheet} from 'react-native';
import {colors, fontSizes} from '../utils/Variables';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.gradientMilkyBlue,
  },
  backgroundImageStyle: {
    flex: 1,
    resizeMode: 'cover',
  },
  mainText: {
    textAlign: 'center',
    fontSize: fontSizes.largest,
    color: colors.white,
    marginTop: '3%',
  },
  logoStyle: {
    height: 300,
    width: '80%',
    marginTop: '45%',
    alignSelf: 'center',
  },
  textLogoBottm: {
    marginTop: -50,
    fontSize: fontSizes.big,
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  mainText: {
    textAlign: 'center',
    fontSize: fontSizes.largest,
    color: colors.white,
    marginTop: '3%',
  },
});
export default styles;
