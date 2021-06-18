import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';

import { styles } from '../../styles';
import { Imagen } from '../../components/imagen';
import { peliculas } from '../../data';

export function Listado({ navigation, route }) {
  const { nombre } = route.params || {};
  const [pelicula, setPelicula] = useState({});
  useEffect(() => {
    if (nombre) {
      navigation.setOptions({ title: 'Resultados para: ' + nombre });
      setPelicula(
        peliculas.find(({ originalTitle }) => originalTitle.includes(nombre)) ||
          {}
      );
    }
  }, [nombre]);

  return (
    <View style={styles.container}>
      {nombre ? (
        pelicula.originalTitle ? (
          <Pelicula navigation={navigation} pelicula={pelicula} />
        ) : (
          <Text style={styles.text}>
            No se encontraron películas con ese nombre
          </Text>
        )
      ) : (
        peliculas.map((p, i) => (
          <Pelicula key={`film${i}`} navigation={navigation} pelicula={p} />
        ))
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const Pelicula = ({ navigation, pelicula }) => {
  return (
    <View>
      <Text style={styles.text}>Título: {pelicula.originalTitle}</Text>
      <Imagen uri={pelicula.posterURL} />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Ficha', { nombre: pelicula.originalTitle })
        }
      >
        <Text style={styles.buttonText}>{pelicula.originalTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};
