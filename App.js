import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [base, setBase] = useState();
  const [height, setHeight] = useState();
  const [area, setArea] = useState();

  function calcArea(){
    let result = base * height /2;
    setArea(result)
  }

  return (
    <View style={styles.container}>
      <Text>Triangle</Text>
      
      <Text>Alap</Text>

      <TextInput
      style={styles.input} 
      placeholder='Alap'
      onChangeText={ base  => setBase(base) } />

      <Text>Magasság</Text>
      <TextInput
      style={styles.input} 
      placeholder='Magasság'
      onChangeText={ height  => setHeight(height) } />

      <Button 
        title="Számít"
        onPress={calcArea}

      />

      <Text>Terület</Text>
      <TextInput
      style={styles.input}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    width: '80%',
    marginTop: 8,
    marginBottom: 8,
  }
});
