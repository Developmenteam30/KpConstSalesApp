import {StyleSheet, Dimensions} from 'react-native';
import {colors, fontSizes} from '../utils/Variables';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.orange,
  },
  backgroundStyle: {
    flex: 1,
    resizeMode: 'cover',
    height: height,
  },
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
