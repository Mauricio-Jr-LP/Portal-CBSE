import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/Feather';

import Home from "./HomeScreen";
import Login from "./LoginScreen";
import Solucao from "./SolucaoScrenn";
import Noticia from "./NoticiaScreen";
import Painel from "./PainelScreen";
import Pastas from "./PastasScreen";
import Documentos from "./DocumentoScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "black",
  },
  headerTintColor: "yellow",
  headerBackTitle: "Back"
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}
    screenOptions={({ route }) => ({
		tabBarIcon: ({ color, size }) => {
			let iconName;

			switch (route.name) {
				case 'Home':
					iconName = 'home';
					break;
				case 'Categories':
					iconName = 'list';
					break;
				case 'Post':
					iconName = 'edit';
					break;
				case 'Notifications':
					iconName = 'bell';
					break;
				case 'Settings':
					iconName = 'settings';
					break;
				default:
					iconName = 'circle';
					break;
			}

			return <Icon name={iconName} size={size} color={color} />;
		},
	})}
		tabBarOptions={{
		activeTintColor: '#9C27B0',
		inactiveTintColor: '#777',
	}}
>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Castelo Branco App'}} />
      <Stack.Screen name="Solucao" component={Solucao} options={{ title: 'Solução' }}/>
	  <Stack.Screen name="Noticia" component={Noticia} options={{ title: 'Noticia' }}/>
	  <Stack.Screen name="Painel" component={Painel} options={{ title: 'Painel' }}/>
	  <Stack.Screen name="Pastas" component={Pastas} options={{ title: 'Pastas' }}/>
	  <Stack.Screen name="Documentos" component={Documentos} options={{ title: 'Documentos' }}/>
    </Stack.Navigator>
  );
};

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, LoginStackNavigator};