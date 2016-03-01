'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView
} from 'react-native';

class ItemThings extends Component {
    onButtonPress(){
        this.props.navigator.push({
            id: 'Itemdet',
            passProps:{
                item: this.props.item
            }
        })
    }
    render() {
        console.log(this.props.item)
      return (
        <View style={styles.container}>
          

              <TouchableHighlight style={styles.button} onPress={this.onButtonPress.bind(this)}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{this.props.item.name}</Text>
                </View>
              </TouchableHighlight>
      </View>
          )
    }
}

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
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderColor: '#6DDDFF',
        backgroundColor: '#008ABA',},
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        borderColor:"#ffffff",
        borderWidth:5},
    text: {
        textAlign:"center",
        flex:1,
        alignSelf: "center",
        fontSize:25,
        color: '#ffffff',
    }
});

module.exports = ItemThings;
