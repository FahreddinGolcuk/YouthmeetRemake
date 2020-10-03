import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ProfileScreen,
  ChatScreen,
  MainScreen,
  NewGroupScreen,
  SearchScreen,
} from '@Containers/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '@Theme/index';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.tertiary,
        inactiveTintColor: 'grey',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Main') {
            iconName = 'car-key';
          } else if (route.name === 'Profile') {
            iconName = 'car-estate';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      initialRouteName="Main">
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Group" component={NewGroupScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
