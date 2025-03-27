import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Button } from '@rneui/base'
import { getAuth } from "firebase/auth";
import ProfileOptions from '../components/profile/ProfileOptions';
import AvatarProfile from '../components/profile/AvatarProfile';

export default function Profile() {
    const auth = getAuth();
    const [user, setUser] = useState(auth.currentUser);

  return (
    <View style={styles.container}>
        <AvatarProfile user={user} />
        <ProfileOptions />
        <Button 
            title={'Cerrar sesión'}
            containerStyle={styles.btnLogoutContainer}
            buttonStyle={styles.btnLogout}
            titleStyle={{color: '#4abfa4'}}
            onPress={() => {
                auth.signOut();
            }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 64,
  },
  btnLogoutContainer: {
    marginTop: 16,
  },
  btnLogout: {
    margin: 16,
    backgroundColor: 'white',
    borderColor: '#4abfa4',
    borderWidth: 1,
  },
})