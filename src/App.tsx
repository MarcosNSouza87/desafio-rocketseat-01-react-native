import { StatusBar } from 'expo-status-bar';
import * as RN from 'react-native';
import Home from './screens/Home';
import { global } from './styles/global';
export default function App() {
	return (
		<RN.SafeAreaView style={global.initial}>
			<StatusBar style="auto" />
			<Home />
		</RN.SafeAreaView>
	);
}
