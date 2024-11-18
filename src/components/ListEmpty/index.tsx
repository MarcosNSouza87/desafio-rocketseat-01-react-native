import React from 'react';
import * as RN from 'react-native';
import styles from './styles';
import ListIcon from '../../assets/list';

const ListEmpty = () => {
	return (
		<RN.View style={styles.container}>
      <RN.View style={styles.icon}>
			  <ListIcon size={"80"}/>
      </RN.View>
			<RN.Text style={[styles.text, styles.bold]}>
				Você ainda não tem tarefas cadastradas
			</RN.Text>
			<RN.Text style={styles.text}>
				Crie tarefas e organize seus itens a fazer
			</RN.Text>
		</RN.View>
	);
};

export default ListEmpty;
