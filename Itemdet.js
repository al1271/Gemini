'use strict';

import React, {    
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
} from 'react-native';
    
var ItemThings = require('./components/ItemThings');

class Itemdet extends Component {

  render() {
    console.log(this.props.item)
    return (
        
<View style={styles.container}>
    <View style={styles.screenTop}>
        <Image
        style={styles.icon}
        source={require('./img/logo.png')}
        ></Image>
        <Text style={styles.text}>Name: {this.props.passProps.item.name}</Text>
    </View>
    <View style={styles.screenBottom}>
        <Text style={styles.text}>Quantity: {this.props.passProps.item.quantity}</Text>
        <Text style={styles.text}>Description: {this.props.passProps.item.description}</Text>
        <TouchableHighlight style={styles.button} onPress={this.onButtonPress.bind(this)}><Text>Back</Text></TouchableHighlight>
    </View>
</View>
        
    );
  }

  onButtonPress(){
    this.props.navigator.pop({
      id: 'Items'
    });
  }
};

const styles = StyleSheet.create({
    icon: {
        flex: 1,
        width: 150,
        resizeMode: 'contain'
    },
    textContainer:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"},
    button:{
        height: 50,
        width:300,
        alignItems: "center",
        justifyContent: "center",
        borderColor: '#6DDDFF',
        backgroundColor: '#008ABA',},
    container: {
        flex: 1,
        borderColor:"#ffffff",
        borderWidth:5
        },
    text: {
        textAlign:"center",
        flex:1,
        alignSelf: "center",
        fontSize:25,
        },
    container: { 
        flex: 4,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        },
    screenTop: {
        paddingTop:25,
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
});

module.exports = Itemdet;