import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Homepage from "./pages/Homepage";
import styles from './components/styles'; 
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Homepage />
    </View>
  );
}
