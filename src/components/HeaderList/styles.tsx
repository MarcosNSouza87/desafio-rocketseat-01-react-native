import { StyleSheet } from "react-native";
import { colors } from "../../styles/global";

export const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 20,
    height: 70,
  },
  contentRow:{
    flexDirection: 'row',
    width:"35%"
  },
  contentFinish:{
    justifyContent: 'flex-end'
  },
  info:{
    color: colors.gray.gray100,
    paddingTop: 2,
    fontWeight: 700,
  },
  infoText:{
    backgroundColor: colors.gray.gray400,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginLeft: 6,
  },
  blue:{
    color: colors.blue.main,
  },
  purple:{

    color: colors.purple.main,
  }
})