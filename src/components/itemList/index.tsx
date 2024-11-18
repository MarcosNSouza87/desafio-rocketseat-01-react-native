import React from 'react';
import * as RN from 'react-native';
import styles from './styles';
import Checkbox from '../checkbox';
import RemoveIcon from '../../assets/remove';

interface IItemList {
	item: {
		id: string;
		text: string;
    checked: boolean;
	};
	onCheck: (id: string) => void;
	onRemove: (id: string) => void;
}

const ItemList = ({ item, onCheck, onRemove }: IItemList) => {

	return (
		<RN.View style={styles.item}>
			<Checkbox checked={item.checked} onPress={() => onCheck(item.id)} />
			<RN.Text style={[styles.text,item.checked ? styles.checked: {}]}>{item.text}</RN.Text>
			<RN.TouchableOpacity style={styles.btnRemove} onPress={() => onRemove(item.id)}>
				<RemoveIcon />
			</RN.TouchableOpacity>
		</RN.View>
	);
};

export default ItemList;
