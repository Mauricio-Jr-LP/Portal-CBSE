import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./HomeScreen";
import Login from "./LoginScreen";
import Solucao from "./SolucaoScrenn";
import Noticia from "./NoticiaScreen";
import allNoticias from "./allNoticiasScreen";
import Pastas from "./PastasScreen";
import Configuracoes from "./ConfiguracoesScreen";

const Stack = createStackNavigator();

const MainStackNavigator = ({route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
      <Stack.Screen name="Solucao" component={Solucao} options={{ title: 'Solução' }}/>
      <Stack.Screen name="Noticia" component={Noticia} options={{ title: '' }}/>
      <Stack.Screen name="allNoticias" component={allNoticias} options={{ title: 'Todas Noticias' }}/>
      <Stack.Screen name="Pastas" component={Pastas} options={{ title: 'Pastas' }}/>
      <Stack.Screen name="Configuracoes" component={Configuracoes} options={{ title: 'Configurações' }}/>
    </Stack.Navigator>
  );
};

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Area do cliente" component={Login} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, LoginStackNavigator};