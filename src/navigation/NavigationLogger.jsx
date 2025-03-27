import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Icon } from "@rneui/base";
import HomeStack from "./stack/home/HomeStack";
import Profile from "../modules/auth/screens/Profile";
import TopFiveStack from "./stack/topFive/TopFiveStack";
import HistoryStack from "./stack/history/HistoryStack";

const Tab = createBottomTabNavigator();

export default function NavigationLogger() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const { iconName, iconType } = getIconName(route.name, focused);
            return (
              <Icon name={iconName} type={iconType} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{title: 'Inicio'}} />
        <Tab.Screen name="TopFive" component={TopFiveStack} options={{title: 'Top 5'}} />
        <Tab.Screen name="History" component={HistoryStack} options={{title: 'Historial'}} />
        <Tab.Screen name="Profile" component={Profile} options={{title: 'Perfil'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const getIconName = (routeName, focused) => {
  let iconName = "";
  const iconType = "material-community";

  switch (routeName) {
    case "Home":
      iconName = focused ? "home" : "home-outline";
      break;
    case "TopFive":
      iconName = focused ? "trophy" : "trophy-outline";
      break;
      case "History":
        iconName = focused ? "clock" : "clock-outline";
        break;
      case "Profile":
        iconName = focused ? "account" : "account-outline";
        break;
  }
  return { iconName, iconType };
};