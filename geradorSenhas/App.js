import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SavedPasswords from './src/screens/SavePasswords';
import ImporSenha from './src/screens/ImportanciaSenha';
import { ModalPassword } from './src/components/modal/index';


let charset = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  const [senhaGerada, setSenhaGerada] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [SavedPasswords, setSavedPasswords] = useState([]);

  function gerarSenha() {

    let senha = "";

    for (let i = 0, n = charset.length; i < 10; i++) {
      senha += charset.charAt(Math.floor(Math.random() * n));
    }

    setSenhaGerada(senha)
    setModalVisible(true);

  }


  function salvarSenha() {
    setSavedPasswords (prevPasswords => {
    const updatedPasswords = [...prevPasswords, senhaGerada];
    setModalVisible(false); 
    navigation.navigate('SavedPasswords', { savedPasswords: updatedPasswords }); // senhas
    return updatedPasswords; 
    });
  }

  function importanciaSenha() {
    navigation.navigate('ImporSenha'); // vai para a tela "ImporSenha"
  }

   
  return (    
    <View style={styles.container}>
      <Image
        source={require("./src/imgs/cadeado.png")}
        style={styles.logo}
      />
 
      <Text style={styles.title}> Gerador de Senha PRO </Text>
 
      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.textButton}> Gerar Senha </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={salvarSenha}>
        <Text style={styles.textButton}> Salvar Senha </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={importanciaSenha}>
        <Text style={styles.textButton}> A importância de uma senha forte </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <ModalPassword senha={senhaGerada} handleClose={ () => setModalVisible(false)} salvarSenha={salvarSenha} />
      </Modal>      

    </View >
    
  );
}

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SavedPasswords" component={SavedPasswords} />
      <Stack.Screen name="ImporSenha" component={ImporSenha} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000C29',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20,
    width: 250,
    height: 250,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 50,
    color: '#fff',
  },
  button: {
    backgroundColor: '#071D92',
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  textButton: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  senha: {
    marginTop: 20,
    color: '#333',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
