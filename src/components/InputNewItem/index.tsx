import React from 'react';
import * as RN from 'react-native';
import {styles} from './styles';
import { colors } from '../../styles/global';

interface IInputNewItem{
  value: string;
  onChangeText:(value:string) => void;
  placeholder: string;
}

const InputNewItem = ({value,onChangeText, placeholder}:IInputNewItem) => {
  return(
    <RN.TextInput style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.gray.gray300}
      
    />
  )
}

export default InputNewItem