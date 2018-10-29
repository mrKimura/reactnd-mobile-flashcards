import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { colorMain, colorSemiMedium } from '../appearance/colors'
import { Ionicons } from '@expo/vector-icons'
import CreateNewDesk from '../components/CreateNewDesk'
import DeskList from '../components/DeskList'
import Desk from '../components/Desk'
import CreateNewCard from '../components/CreateNewCard'
import Quiz from '../components/Quiz'

const Tabs = createBottomTabNavigator(
  {
    DeskList: {
      screen: DeskList,
      navigationOptions: {
        tabBarLabel: 'Desks',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-albums" size={30} color={tintColor} />
        ),
      },
    },
    CreateNewDesk: {
      screen: CreateNewDesk,
      navigationOptions: {
        tabBarLabel: 'Create New Desk',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-add-circle" size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    navigationOptions: {
      header: null,
      initialRouteName: 'DeskList',
    },
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: colorSemiMedium,
      style: {
        height: 64,
        paddingBottom: 4,
        paddingTop: 4,
        backgroundColor: colorMain,
      },
    },
  },
)

const MainNav = createStackNavigator(
  {
    Tabs: {
      screen: Tabs,
      navigationOptions: {
        header: null,
      },
    },
    Desk: {
      screen: Desk,
    },
    CreateNewCard: {
      screen: CreateNewCard,
      navigationOptions: {
        headerTitle: 'Create New Card',
      },
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        headerTitle: 'Quiz',
      },
    },
  },
  {
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colorMain,
      },
    },
  },
)

export default MainNav
