import R from 'react';
import * as RN from 'react-native';
import { styles } from './styles';
import Logo from '../../assets/logo';
import InputNewItem from '../../components/InputNewItem';
import ButtonIcon from '../../components/button';
import HeaderList from '../../components/HeaderList';
import ItemList from '../../components/itemList';
import ListEmpty from '../../components/ListEmpty';


const Home = () => {
	const [newItem, setNewItem] = R.useState<string>('');
	return (
		<RN.View style={styles.main}>
			<RN.View style={styles.header}>
				<Logo />
			</RN.View>
			<RN.View style={styles.row}>
				<InputNewItem 
					value={newItem}
					onChangeText={setNewItem}
					placeholder='Adicione uma nova tarefa'
				/>
				<ButtonIcon onPress={() => {}}/>
			</RN.View>
			<RN.View style={styles.list}> 
				<HeaderList created='0' finish='0' />
				<ItemList item={{id: "1", text:'finalizar todos componentes hoje', checked:true}} onCheck={() => {}} onRemove={() => {}} />
				<ItemList item={{id: "1", text:'finalizar app hoje', checked:false}} onCheck={() => {}} onRemove={() => {}} />
				<ListEmpty />
			</RN.View>
		</RN.View>
	);
};

export default Home;
