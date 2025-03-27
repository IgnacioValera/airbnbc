import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from '@rneui/base';


export default function AvatarProfile(props) {
    const { user } = props;
  return (
    <View style={{flexDirection: 'row', marginLeft: 16, marginBottom: 16}}>
        <Avatar rounded size="large" source={user.photoURL !== null ? { uri: user.photoURL } : {uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'}} />
    
        <View style={{marginLeft: 8, justifyContent: 'center', alignItems: 'flex-start'}}>
            <Text style={{fontWeight: 'bold'}}>{user.displayName ? user.displayName : 'Sin nombre'}</Text>
            <Text>{user.email ? user.email : 'Anonimo'}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})