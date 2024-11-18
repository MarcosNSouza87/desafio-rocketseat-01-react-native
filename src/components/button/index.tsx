import React from 'react';
import * as RN from 'react-native';
import styles from './styles';
import AddIcon from '../../assets/add';

interface IButtonIcon {
  onPress:() => void
}

const ButtonIcon = ({onPress}:IButtonIcon) => {
  return(
    <RN.TouchableOpacity style={styles.btn} onPress={onPress}>
      <AddIcon />
    </RN.TouchableOpacity>
  )
}

export default ButtonIcon