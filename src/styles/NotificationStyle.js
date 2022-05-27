import {StyleSheet, Dimensions} from 'react-native';
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
    alignItems: 'center',
    padding: 10,
    height: 60,
  },
  tabButton: {
    paddingVertical: '5%',
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
});
export default styles;
