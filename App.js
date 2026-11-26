import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Usuarios from './src/pages/Usuarios';
import { Ifpr, G1, Uol } from './src/pages/PaginasWeb';

const Tab = createBottomTabNavigator();

function icone(nome) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={nome} color={color} size={size} />
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Usuários"
              component={Usuarios}
              options={{ tabBarIcon: icone('account-group') }}
            />
            <Tab.Screen
              name="IFPR"
              component={Ifpr}
              options={{ tabBarIcon: icone('school') }}
            />
            <Tab.Screen
              name="G1"
              component={G1}
              options={{ tabBarIcon: icone('newspaper') }}
            />
            <Tab.Screen
              name="UOL"
              component={Uol}
              options={{ tabBarIcon: icone('web') }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}