import * as RN from 'react-native';
import { colors } from '../../styles/global';

const styles = RN.StyleSheet.create({
  item:{
    flexDirection:'row',
    backgroundColor: colors.gray.gray500,
    padding: 12,
    marginVertical: 4,
    borderRadius: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text:{
    color: colors.gray.gray100,
    flex: 1,
    marginHorizontal: 8,
    marginBottom: 2,
  },
  checked:{
    color: colors.gray.gray300,
    textDecorationLine: 'line-through',
  },
  btnRemove: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;