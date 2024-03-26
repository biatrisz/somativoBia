import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';
export default function App() {
  return (
    <View style={styles.container}>
        <Image style={styles.Imagens}
      source ={require ('../../assets/Rihanna.jpg')}
      />
      <Text>bia's initial page</Text>
      <Link style={styles.btn} href = {"/sobre"}>sobre</Link>
      <Link style={styles.btn} href = {"/contatos"}>contatos</Link>
     
      <StatusBar style="auto" />
    </View>
  );
}


