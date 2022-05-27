import {StyleSheet, Dimensions} from 'react-native';
import {colors, fontSizes} from '../utils/Variables';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  head: {
    marginTop: 20,
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
  },
  headerText: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.white,
  },
  footer1: {
    position: 'absolute',
    bottom: 0,
    // zIndex: 40,
    flex: 1,
    width: width,
  },
  map: {
    width: width,
    height: height - 250,
  },
  aligncenter: {
    width: width,
    alignItems: 'center',
  },
  textcolor: {color: colors.black},
  buttonsheet: {
    backgroundColor: '#64922C',
    paddingHorizontal: 20,
    borderRadius: 4,
    marginTop: 10,
    width: width - 100,
  },
  ///========
});
export default styles;
