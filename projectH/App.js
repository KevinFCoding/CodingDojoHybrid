import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePageView from './Views/HomePageView'
import TableView from './Views/TableView'
import DetailView from './Views/DetailView'

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  HomePage: HomePageView,
  Table: TableView,
  Detail: DetailView,
});

const AppContainer = createAppContainer(AppNavigator);