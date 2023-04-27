import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RoutingConfig from './RoutingConfig';
import {Provider} from 'react-redux';
import store from './Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <RoutingConfig />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
