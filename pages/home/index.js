import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from '../../styles';

export function Home({ navigation }) {
  const [nombre, setNombre] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoSmall}
        source={require('../../assets/MovieHelper-small.png')}
      />
      <Text style={styles.title}>Buscador de películas</Text>
      <TextInput
        style={styles.textInput}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Ingrese el nombre de la película"
        placeholderTextColor="lightgray"
      />
      <TouchableOpacity
        style={styles.longButton}
        onPress={() => navigation.navigate('Listado', { nombre })}
      >
        <Text style={styles.longButtonText}>Buscar</Text>
      </TouchableOpacity>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Listado')}>
          <Text style={styles.buttonText}>Netflix</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Listado')}>
          <Text style={styles.buttonText}>Prime Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
