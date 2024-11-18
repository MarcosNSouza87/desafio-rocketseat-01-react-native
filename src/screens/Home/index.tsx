import R from 'react';
import * as RN from 'react-native';
import { styles } from './styles';
import Logo from '../../assets/logo';
import InputNewItem from '../../components/InputNewItem';
import ButtonIcon from '../../components/button';
import HeaderList from '../../components/HeaderList';
import ItemList from '../../components/itemList';
import ListEmpty from '../../components/ListEmpty';

interface IList {
	id: string;
	text: string;
	checked: boolean;
}

const Home = () => {
	const [newItem, setNewItem] = R.useState<string>('');
	const [list, setList] = R.useState<IList[]>([]);

	const addItem = () => {
		const newTodo: IList = {
			id: Date.now().toString(),
			text: newItem,
			checked: false,
		};
		setList([...list, newTodo]);
		setNewItem("");
	};

	const checkItem = (id: string) => {
		setList(
			list.map((item) =>
				item.id === id ? { ...item, checked: !item.checked } : item,
			),
		);
	};

	const removeItem = (id: string) => {
		setList(list.filter((item) => item.id !== id));
	};

	return (
		<RN.View style={styles.main}>
			<RN.View style={styles.header}>
				<Logo />
			</RN.View>
			<RN.View style={styles.row}>
				<InputNewItem
					value={newItem}
					onChangeText={setNewItem}
					placeholder="Adicione uma nova tarefa"
				/>
				<ButtonIcon onPress={addItem} />
			</RN.View>
			<RN.View style={styles.list}>
				<RN.FlatList
					data={list}
					keyExtractor={(item: IList) => item.id}
					style={styles.list}
					renderItem={({ item }: { item: IList }) => (
						<ItemList
							item={item}
							onCheck={() => checkItem(item.id)}
							onRemove={() => removeItem(item.id)}
						/>
					)}
					refreshing={true}
					ListHeaderComponent={
						<HeaderList
							created={list.length.toString()}
							finish={list.filter((item) => item.checked === true).length.toString()}
						/>
					}
					initialNumToRender={10}
					maxToRenderPerBatch={10}
					ListEmptyComponent={<ListEmpty />}
				/>
			</RN.View>
		</RN.View>
	);
};

export default Home;
