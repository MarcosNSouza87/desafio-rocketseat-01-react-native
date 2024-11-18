import React from 'react';
import * as RN from 'react-native';
import { styles } from './styles';

interface IHeaderList {
	created: string,
	finish: string,
}
const stinfo = [styles.info, styles.blue]

const HeaderList = ({created, finish}:IHeaderList) => {
	return (
		<RN.View style={styles.row}>
			<RN.View style={styles.contentRow}>
				<RN.Text style={stinfo}>Criadas</RN.Text>
				<RN.Text style={[styles.info,styles.infoText]}>{created}</RN.Text>
			</RN.View>
      <RN.View style={[styles.contentRow, styles.contentFinish]}>
				<RN.Text style={[styles.info,styles.purple]}>Concluidas</RN.Text>
				<RN.Text style={[styles.info,styles.infoText]}>{finish}</RN.Text>
			</RN.View>
		</RN.View>
	);
};

export default HeaderList;
