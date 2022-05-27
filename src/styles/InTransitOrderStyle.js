import {StyleSheet, Dimensions} from 'react-native';
import {colors, fontSizes} from '../utils/Variables';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.gradientBlue,
  },
  backgroundStyle: {
    flex: 1,
    resizeMode: 'cover',
    height: height,
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trackView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gradientMilkyBlue,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 6,
    justifyContent: 'center',
  },

  rowSpace1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    alignItems: 'center',
  },
  whiteBanner: {
    // flexDirection: 'row',

    borderRadius: 10,
    backgroundColor: colors.white,
    marginTop: 15,
    marginHorizontal: 15,
    paddingHorizontal: '2%',
    paddingVertical: 5,
  },
  orderTxt: {
    fontSize: fontSizes.small,
    color: colors.black,
    fontWeight: 'bold',
  },
  orderTxt1: {
    fontSize: fontSizes.small,
    color: colors.black,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  grayTxt: {
    fontSize: fontSizes.smaller,
    color: colors.gray,
    fontWeight: '500',
    lineHeight: 25,
  },
  track: {
    fontSize: fontSizes.smaller,
    color: colors.white,
    fontWeight: '500',
    lineHeight: 25,
  },
  date: {
    fontSize: fontSizes.smaller,
    color: colors.black,
    fontWeight: '800',
    lineHeight: 25,
    marginLeft: 10,
  },
  whiteBanner1: {
    paddingHorizontal: 10,
  },
  status: {
    fontSize: fontSizes.small,
    color: 'green',
    fontWeight: '500',
    lineHeight: 25,
  },
  cardHeader: {
    backgroundColor: colors.white,
    padding: 0,
    marginHorizontal: -0.9,
    marginTop: -0.9,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    height: 60,
  },
  headerIconView: {
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 50,
  },
  mainText: {
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.white,
  },
  top: {
    marginTop: 5,
  },
  ///////==========
  header: {
    flexDirection: 'row',
    padding: 15,
  },
  headerTitle: {
    fontSize: fontSizes.medium,
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: '3%',
  },
  logoStyle: {
    height: 120,
    width: 120,
    marginTop: '5%',
    alignSelf: 'center',
    borderRadius: 60,
    backgroundColor: colors.lightGray,
  },
  inputMainContainer: {
    marginTop: '5%',
    marginBottom: '15%',
  },
  inputIconView: {
    flexDirection: 'row',
    borderWidth: 0.7,
    borderRadius: 10,
    borderColor: colors.white,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: '2%',
  },
  inputContainer: {
    marginLeft: 5,
    color: colors.white,
    fontSize: fontSizes.small,
    width: '77%',
  },
  inputIconAndroid: {
    marginTop: 8,
  },
});
export default styles;
