import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "@rneui/base";

export default function MockupInstagram(props) {
    const { backgroundColor } = props;
    return (
        <View style={{flexDirection: 'row', marginHorizontal: 8, backgroundColor: backgroundColor}}>
        <Avatar size={64} rounded title='FG' containerStyle={styles.avatar}/>
        <Avatar size={64} rounded title='FG' containerStyle={styles.avatar}/>
        <Avatar size={64} rounded title='FG' containerStyle={styles.avatar}/>
      </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        marginHorizontal: 8,
        backgroundColor: 'red',
        borderRadius: 50,
    },
})