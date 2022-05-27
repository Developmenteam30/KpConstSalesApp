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
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  rowDirection1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
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
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
  },
  MainView: {
    flex: 1,
    // height: '20%',
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
    borderRadius: 6,
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
  inputView1: {
    // flexDirection: 'row',
    borderWidth: 0.7,
    borderRadius: 10,
    borderColor: colors.white,
    marginTop: 5,
    // marginHorizontal: 20,
    paddingHorizontal: '2%',
  },
  hight1: {
    marginTop: 10,
  },
  headingTxt1: {
    fontSize: fontSizes.smaller,
    fontWeight: '700',
    color: colors.white,
    // marginLeft: 20,
  },
  hight: {
    marginTop: 20,
  },
  button: {
    marginHorizontal: 20,
    marginTop: 15,
    padding: 10,
    // width: '30%',
    borderRadius: 10,
  },
  button1: {
    marginHorizontal: 20,
    marginTop: '10%',
    padding: 10,
    width: '30%',
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: fontSizes.small,
    color: colors.black,
    fontWeight: 'bold',
  },
  rowDirection3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  spaces1: {
    flex: 1,
    marginTop: 20,
  },
  formTxt: {
    fontSize: fontSizes.smaller,
    fontWeight: '500',
    color: colors.black,
  },
  inputView0: {
    height: 50,
    // flex: 1,
    borderWidth: 0.5,
    borderColor: colors.lightGray,
    borderRadius: 6,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  modalinput: {
    width: '90%',
    color: colors.blue,
  },
  spaces: {
    width: '2%',
  },
});
export default styles;
