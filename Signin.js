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


class Signin extends Component {
  render() {
      console.log('sigin screen');
    return (
      <View style={styles.container}>
        <Image style={styles.bgimage} source={require('./img/signbg.jpg')} >
        <View style={styles.screenTop}>
        <Image
        style={styles.icon}
        source={require('./img/logo.png')}
        ></Image>
        </View>
        <View style={styles.screenBottom}>
            <View style={styles.spacer}></View>
           <TouchableHighlight style={styles.button} onPress={this.onButtonPress.bind(this)} >
               <Text style={styles.buttonText}>Signin</Text>
            </TouchableHighlight>
        </View>
        </Image>
      </View>
    );
  }
  onButtonPress(){
    this.props.navigator.push({
      id: 'Home'
    });
  }
};

const styles = StyleSheet.create({
  container: {
      
    flex: 4,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  bgimage: {
    flex: 1,
    resizeMode: 'contain'
  },
  logo: {
    flex: 1,
    width: 150,
    resizeMode: 'contain'
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
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'Futura'
  },
});
module.exports = Signin;








