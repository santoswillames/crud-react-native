import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, {useContext, useState} from 'react'
import UsersContext from '../context/UsersContext'

export default function UserForm({route, navigation}) {
  const [user, setUser] = useState(route.params ? route.params : {})
  const {dispatch} = useContext(UsersContext)
  return (
    <View style={style.container}>
      <Text>Nome</Text>
      <TextInput
        style={style.input} 
        placeholder='Informe o Nome'
        onChangeText={name => setUser({...user, name})}
        value={user.name}
      />
      <Text>E-mail</Text>
      <TextInput
        style={style.input} 
        placeholder='Informe o E-mail'
        onChangeText={email => setUser({...user, email})}
        value={user.email}
      />
      <Text>URL do Avatar</Text>
      <TextInput
        style={style.input} 
        placeholder='Informe a URL do Avatar'
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        value={user.avatarUrl}
      />
      <Button 
        title='Salvar'
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user
          })
          navigation.goBack()
        }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 16,
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 4
  }
})