import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>bia's page contato</Text>
      <Image style={styles.Imagens}
      source ={require ('../../assets/yeyey.jpg')}
      />
      <Link style={styles.btn} href = {"/"}>inicio</Link>
      <Link style={styles.btn} href = {"/sobre"}>sobre</Link>
      <StatusBar style="auto" />
    </View>
  );
}

