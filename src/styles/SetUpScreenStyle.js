import {StyleSheet} from 'react-native';
import {colors, fontSizes} from '../utils/Variables';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundStyle: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoStyle: {
    height: 100,
    width: 150,
    alignSelf: 'center',
    marginRight: '10%',
  },
  mainText: {
    textAlign: 'center',
    fontSize: fontSizes.largest,
    color: colors.white,
    fontWeight: 'bold'
  },
  inputMainContainer: {
    marginTop: '10%',
    marginBottom: '15%',
  },
  inputContainer: {
    marginLeft: 5,
    color: colors.white,
    fontSize: fontSizes.small,
    width: '77%',
  },
  inputView: {
    flexDirection: 'row',
    borderWidth: 0.7,
    borderRadius: 10,
    borderColor: colors.white,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: '2%',
  },
  inputIconAndroid: {
    marginTop: 8,
  },
});
export default styles;
