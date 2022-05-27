import {StyleSheet} from 'react-native';
import {colors, fontSizes} from '../utils/Variables';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundStyle: {
    height: '90%',
    resizeMode: 'cover',
  },
  whiteBox: {
    backgroundColor: colors.white,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    marginTop: '10%',
    // marginBottom: 20,
    flex: 1,
  },
  mainText: {
    textAlign: 'center',
    fontSize: fontSizes.largest,
    color: colors.white,
    fontWeight: 'bold',
    marginTop: 5,
  },
  line: {
    // height: 100,
    // width: 150,
    alignSelf: 'center',
    marginTop: 20,
    resizeMode: 'contain',
  },
  wellcomeText: {
    textAlign: 'center',
    fontSize: fontSizes.largest,
    color: colors.blue,
    fontWeight: '600',
    marginTop: 15,
  },
  loginTxt: {
    textAlign: 'center',
    fontSize: fontSizes.small,
    color: colors.black,
    fontWeight: '400',
    marginTop: 10,
  },
  logoStyle: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 25,
    // marginRight: '5%',
  },
  userTxt: {
    fontSize: fontSizes.smaller,
    color: colors.black,
    fontWeight: '500',
    marginTop: 20,
    marginLeft: 20,
  },
  inputMainContainer: {
    marginTop: '5%',
    marginBottom: '10%',
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
    borderColor: colors.gray1,
    marginTop: 8,
    marginHorizontal: 20,
    paddingHorizontal: '2%',
  },
  inputIconAndroid: {
    marginTop: 8,
  },
  bottomText: {
    alignSelf: 'center',
    marginTop: '10%',
    fontSize: fontSizes.small,
    color: colors.white,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: fontSizes.small,
    color: colors.white,
    fontWeight: '500',
  },
  button: {
    alignSelf: 'center',
    marginHorizontal: 0,
    paddingVertical: 12,
    width: '45%',
    borderRadius: 6,
    backgroundColor: colors.blue,
  },
});
export default styles;
