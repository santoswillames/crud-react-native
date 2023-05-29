import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';
import { Button } from '@rneui/base';
import { Icon } from '@rneui/themed';
import { UsersProvider } from './src/context/UsersContext';

const Stack = createStackNavigator()

export default function App() {
  
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='UserList' screenOptions={screenOptions}>
          <Stack.Screen 
            name='UserList'
            component={UserList}
            options={({navigation}) => {
              return {
                title: "Lista de Usuários",
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate("UserForm")} 
                    type='clear'
                    icon={<Icon  name='add' size={25} color='white'/>}
                  />
                )
              }
            }}
          />
          <Stack.Screen 
            name='UserForm'
            component={UserForm}
            options={{
              title: "Fomrulário de Usuários"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}

const mauveDark = {
  mauve1: '#161618',
  mauve2: '#1c1c1f',
  mauve3: '#232326',
  mauve4: '#28282c',
  mauve5: '#2e2e32',
  mauve6: '#34343a',
  mauve7: '#3e3e44',
  mauve8: '#504f57',
  mauve9: '#706f78',
  mauve10: '#7e7d86',
  mauve11: '#a09fa6',
  mauve12: '#ededef',
}

const screenOptions = {
  headerStyle: {
    backgroundColor: mauveDark.mauve6
  },
  headerTintColor: mauveDark.mauve12,
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

