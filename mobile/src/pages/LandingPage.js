import React, { useState } from 'react';
import api from '../services/api';
import {KeyboardAvoidingView,
        View,
        Image,
        StyleSheet,
        TextInput,
        TouchableOpacity,
        Text} from 'react-native';


export default function LandingPage({navigation}){

  const [salaAtual,setSalaAtual] = useState('');
  const [salaDestino,setSalaDestino] = useState('');

  async function handleSubmit() {
    // const response = await api.get('/API_PATHCALCULATE', {salaAtual},{salaDestino});
    // const {rota} = response.data;
    navigation.navigate('PathFinderPage');
  }
  
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
        
       <Text style={styles.textLabel}>Sala atual</Text>
       <TextInput
         maxLength={4}
         style={styles.inputClassroom}
         placeholder='Atual'
         autoCapitalize='characters'
         value={salaAtual}
         onChangeText={setSalaAtual}
       />
       <Text style={styles.textLabel}>Sala destino*</Text>
       <TextInput
         maxLength={4}
         style={styles.inputClassroom}
         placeholder='Destino'
         autoCapitalize='characters'
         value={salaDestino}
         onChangeTet={setSalaDestino}
       />
        <TouchableOpacity 
        title='Calcular Rota' 
        style={styles.button} 
        textAlign={'center'} 
        onPress={handleSubmit}>
        <Text style={styles.textCalc}>CALCULAR</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#271d6e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputClassroom: {
    width: 80,
    color: '#444',
    backgroundColor: '#ddd',
    padding: 5,
    borderRadius: 2,
    marginVertical: 8,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#7da122',
    borderRadius: 2,
    width: 120,
    height: 30,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    paddingVertical: 28,
    
  },
  textLabel: {
    fontSize: 18,
    color: '#fff',
  },
  textCalc: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})