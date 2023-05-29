import { View, FlatList, Alert } from 'react-native'
import React from 'react'
import { Avatar,  ListItem, Button, Icon } from '@rneui/themed';
import { LinearGradient } from "expo-linear-gradient";
import { useContext } from 'react';
import UsersContext from '../context/UsersContext';


export default function UserList({navigation}) {

  const { state, dispatch } = useContext(UsersContext)

  function confirmUserDeletion (user) {
      Alert.alert('Excluir Usuário',`Dejesa excluir o usuário ${user.name}?`, [
          {
              text: "Sim",
              onPress() {
                dispatch({
                  type: 'deleteUser',
                  payload: user
                })
                //console.warn('del' + user.id)
              }
          },
          {
              text: 'Não'
          }
      ])
  }

  function getUserItem({item: user}) {
      return (
          <ListItem 
              linearGradientProps={{
                colors: ['#3e3e44', '#161618'],
                start: { x: 1, y: 0 },
                end: { x: 0.2, y: 0 },
              }}
              ViewComponent={LinearGradient}
              bottomDivider
              onPress={() => navigation.navigate("UserForm", user)}
          >
              <Avatar rounded size={60} source={{uri: user.avatarUrl}} />
              <ListItem.Content>
                  <ListItem.Title style={{fontWeight: 'bold', color:'#ededef'}}>{user.name}</ListItem.Title>
                  <ListItem.Subtitle style={{color:'#ededef'}}>{user.email}</ListItem.Subtitle>
              </ListItem.Content>
              <Button
                onPress={() => navigation.navigate("UserForm", user)} 
                type='clear'
                icon={<Icon  name='edit' size={25} color='white'/>}
              />
              <Button
                onPress={() => confirmUserDeletion(user)} 
                type='clear'
                icon={<Icon  name='delete' size={25} color='white'/>}
              />
          </ListItem>
      )
  }

  return (
    <View>
      <FlatList 
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  )
}