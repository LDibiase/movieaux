import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { styles } from '../../styles';
import { Pelicula } from '../../components';
import { peliculas } from '../../data';

export function Listado({ navigation, route }) {
  const { nombre } = route.params || {};
  const [pelicula, setPelicula] = useState({});
  useEffect(() => {
    if (nombre) {
      navigation.setOptions({ title: 'Resultados para: ' + nombre });
      setPelicula(
        peliculas.find(({ originalTitle }) =>
          originalTitle.toUpperCase().includes(nombre.toUpperCase())
        ) || {}
      );
    }
  }, [nombre]);

  return (
    <View style={styles.container}>
      {nombre ? (
        pelicula.originalTitle ? (
          <View style={styles.container}>
            <Pelicula navigation={navigation} pelicula={pelicula} />
          </View>
        ) : (
          <Text style={styles.text}>
            No se encontraron películas con ese nombre
          </Text>
        )
      ) : (
        <ScrollView>
          <View style={styles.rowContainer}>
            {peliculas.map((p, i) => (
              <View style={ownStyles.container} key={`film${i}`}>
                <Pelicula
                  key={`film${i}`}
                  navigation={navigation}
                  pelicula={p}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      )}
      <TouchableOpacity
        style={styles.longButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const ownStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '50%',
  },
});
