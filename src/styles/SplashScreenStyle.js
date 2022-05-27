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
  mainText1: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.white,
    marginTop: 10,
  },
  logoStyle: {
    height: 200,
    width: 200,
    marginTop: '45%',
    alignSelf: 'center',
    resizeMode: 'contain',
    borderRadius: 25,
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
