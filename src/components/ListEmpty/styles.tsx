import * as RN from 'react-native';
import { colors } from '../../styles/global';

const styles = RN.StyleSheet.create({
  container:{
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.gray.gray400,
  },
  icon:{
    marginTop: 60,
    marginBottom: 30,
  },
  text:{
    color: colors.gray.gray300,
    textAlign: 'center',
  },
  bold:{
    fontWeight: 900,
  },
});

export default styles;