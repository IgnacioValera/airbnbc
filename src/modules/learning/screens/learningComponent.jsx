import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Loading from '../../../kernel/components/Loading'
import { Button } from '@rneui/base'

export default function learningComponent() {
    //let count = 1;
    const [count, setCount] = useState(1);
  return (
    <View style={{flex: 1}}>
      <Text>learningComponent</Text>
      <Loading 
        message="Esper un momento..." 
        color="blue" 
        size={32}
        age={20}
        name="Juan"
        count={count}
      />
      <Button 
        title="Incrementar"
        onPress={() => {
            setCount(count + 1);
            console.log('count', count);
        }}
    />
    </View>
  )
}

const styles = StyleSheet.create({})