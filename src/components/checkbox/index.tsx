import React from 'react';
import * as RN from 'react-native';
import styles from './styles';
import CheckinIcon from '../../assets/checkin';
import CheckoutIcon from '../../assets/checkout';

interface ICheckbox {
	checked: boolean;
	onPress: () => void;
}

const Checkbox = ({ checked, onPress }: ICheckbox) => {
	const [check, setCheck] = React.useState<boolean>(checked);
	const onPressCheck = () => {
		setCheck(!check);
    onPress();
	};
	return (
		<RN.TouchableOpacity style={styles.checkbox} onPress={onPressCheck}>
			{checked ? <CheckoutIcon /> : <CheckinIcon />}
		</RN.TouchableOpacity>
	);
};

export default Checkbox;
