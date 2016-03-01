/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

var Signin = require('./Signin');
var Home = require('./Home');
var Items = require('./Items');
var Itemdet = require('./Itemdet');

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableHighlight
} from 'react-native';

class Gemini extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{
            id: 'Signin'
        }}
        renderScene={this.navigatorRenderScene}
        />
    );
  }
      navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'Signin':
        return (<Signin navigator={navigator} title="Signin" passProps={route.passProps}/> );
      case 'Home':
        return (<Home navigator={navigator} title="Home" passProps={route.passProps}/> );
      case 'Items':
        return (
          <Items navigator={navigator} title="Items" passProps={route.passProps}/>
        );
        case 'Itemdet':
            return(
            <Itemdet navigator={navigator} title="Itemdet" passProps={route.passProps}/>
            )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

AppRegistry.registerComponent('Gemini', () => Gemini);
