'use strict';
var React = require('react-native');

var {    
  AppRegistry,
  Text,
  TextInput,
  SigninButton,  
  ScrollView,
  View,
  Image,
  StyleSheet,
  Navigator,
  TouchableHighlight,
  Component
} = React;


class Home extends Component {
  render() {
      console.log('Home screen');
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
            <Image
                style={styles.icon}
                source={require('./img/logo.png')}
            ></Image>
            </View>
            <View style={styles.screenTop}>
            <Text style={styles.welcome}>
                You have demonstrated that everyone here has a purpose. You have demonstrated that everyone has meaning and no one person is better or more important than another, and no one person holds a position of privilege.
            </Text>
                
            </View>
            <View style={styles.screenBottom}>             
            <TouchableHighlight style={styles.button} onPress={this.onButtonPress.bind(this)}>
               <Text style={styles.buttonText}>Maitance</Text>
            </TouchableHighlight>
               
               <TouchableHighlight style={styles.button} onPress={this.onButtonPress.bind(this)}>
               <Text style={styles.buttonText}>Inventory</Text>
               </TouchableHighlight>
               
               <TouchableHighlight style={styles.button} onPress={this.onButtonPress.bind(this)}>
               <Text style={styles.buttonText}>Orders</Text>
               </TouchableHighlight>
            </View>
          </View>

    );
  }
  onButtonPress(){
    this.props.navigator.push({
      id: 'Items'
    });
  }
};

const styles = StyleSheet.create({
  container: { 
    flex: 4,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  screenTop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screenBottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  spacer: {
    flex: 4
  },
  button: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#6DDDFF',
    backgroundColor: '#008ABA',
    width: 300,
    justifyContent: 'center'
  },
  welcome: {textAlign: 'center',fontSize:20},
  buttonText: {
    textAlign: 'center',
    color: '#ffffff'
  },
});

module.exports = Home;