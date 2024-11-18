//13:25
import * as RN from 'react-native';


export const colors = {
  blue:{
    dark:'#1e6f9f',
    main:'#4ea8de',
  }, 
  purple:{
    dark:'#5E60E0',
    main:'#8284FA',
  },
  gray:{
    gray100:'#F2F2F2',
    gray200:'#D9D9D9',
    gray300:'#808080',
    gray400:'#333333',
    gray500:'#262626',
    gray600:'#1A1A1A',
    gray700:'#0D0D0D',
  },
  danger:'#E25858'
}


export const global = RN.StyleSheet.create({
  initial:{
    flex:1,
    backgroundColor: colors.gray.gray600,
  },
})
