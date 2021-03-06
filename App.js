import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { config } from 'dotenv';

import { Home, Listado, Login, SignUp, Ficha, Favoritas } from './pages';

const Stack = createStackNavigator();

export default function App() {
  // useEffect(() => {
  //   config();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Listado"
          component={Listado}
          options={{ title: 'Listado de películas' }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Iniciar sesión' }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'Crear cuenta' }}
        />
        <Stack.Screen
          name="Ficha"
          component={Ficha}
          options={{ title: 'Ficha de la película' }}
        />
        <Stack.Screen
          name="Favoritas"
          component={Favoritas}
          options={{ title: 'Tus películas favoritas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
