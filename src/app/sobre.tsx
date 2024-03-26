import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>pagina sobre</Text>
      <Image style={styles.Imagens}
      source ={require ('../../assets/zend.jpg')}
      />
      <Link style={styles.btn} href = {"/"}>inicio</Link>
      <Link style={styles.btn2} href = {"/contatos"}>contatos</Link>
      <StatusBar style="auto" />
    </View>
  );
}


