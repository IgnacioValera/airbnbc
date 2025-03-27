import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TopFive from '../../../modules/topFive/screens/TopFive';

const Stack = createStackNavigator();
export default function TopFiveStack() {
  return (
    <Stack.Navigator initialRouteName="Top-five">
      <Stack.Screen name="Top-five" component={TopFive} options={{title: 'Top 5'}}/>
    </Stack.Navigator>
  )
}