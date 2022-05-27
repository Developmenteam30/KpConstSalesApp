import {StyleSheet, Dimensions} from 'react-native';
import {color} from 'react-native-reanimated';
import {colors, fontSizes} from '../utils/Variables';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  subContainer: {
    marginHorizontal: 5,
  },
  MainView: {
    flex: 1,
    // height: '20%',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '10%',
  },
  headerText: {
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.white,
  },
  cardHeader: {
    backgroundColor: colors.white,
    padding: 0,
    marginHorizontal: -0.9,
    marginTop: -0.9,
  },

  tabButton: {
    paddingVertical: '4%',
    // paddingHorizontal: '11%',
    marginTop: '2%',
    borderRadius: 8,
    marginHorizontal: '4%',
  },
  msgHeadingTxt: {
    fontSize: fontSizes.smaller,
    fontWeight: 'bold',
    color: colors.white,
    flex: 1,
  },
  msgTxt: {
    fontSize: fontSizes.smallest,
    fontWeight: '400',
    color: colors.white,
  },
  time: {
    fontSize: fontSizes.smallest,
    fontWeight: '700',
    color: colors.white,
    marginRight: 5,
    marginTop: -10,
  },
  spacce: {
    marginLeft: 5,
    width: '85%',
  },
  footer1: {
    position: 'absolute',
    bottom: 0,
    // zIndex: 40,
    flex: 1,
    width: width,
  },
  backgroundStyle: {
    height: height,
    resizeMode: 'cover',
    backgroundColor: colors.white,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    marginTop: 25,
  },
  inputMainContainer: {
    marginTop: '5%',
    marginBottom: '15%',
  },
  inputView: {
    // flexDirection: 'row',
    borderWidth: 0.7,
    borderRadius: 10,
    borderColor: colors.lightGray,
    marginTop: 5,
    marginHorizontal: 20,
    paddingHorizontal: '2%',
  },
  headingTxt: {
    fontSize: fontSizes.smaller,
    fontWeight: '500',
    color: colors.black,
    marginLeft: 20,
  },
  hight: {
    marginTop: 10,
  },
  Price: {
    marginTop: 10,
    flexDirection: 'row',
  },
  Price2: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  button: {
    marginHorizontal: 20,
    marginTop: 10,
    padding: 10,
    // width: '30%',
    borderRadius: 10,
  },
  button3: {
    marginHorizontal: 20,
    // marginTop: 30,
    padding: 4,
    width: '30%',
    borderRadius: 6,
    // backgroundColor: colors.gray,
  },
  button2: {
    marginHorizontal: 20,
    marginTop: '10%',
    padding: 5,
    width: '40%',
    borderRadius: 10,
    alignSelf: 'center',

    alignItems: 'center',

    paddingHorizontal: 10,
  },
  amount: {
    // marginHorizontal: 20,
    marginTop: '5%',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  buttonText1: {
    // alignSelf: 'center',
    fontSize: fontSizes.smaller,
    color: colors.black,
    fontWeight: '500',
  },
  buttonText: {
    fontSize: fontSizes.smaller,
    color: colors.black,
    fontWeight: '500',
  },
});
export default styles;
