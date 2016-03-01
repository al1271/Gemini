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
  Component,
} = React;
    
var ItemThings = require('./components/ItemThings');
var api = require("./util/data.json");
var items = [];


class Items extends Component {
      constructor() {
    super();
    this.state = {
      item: items
    }
   }

   componentWillMount() {
           console.log(api.inv);
       this.setState({
           item: api.inv
       });
}
                          
  render() {
    return (
    <View style={styles.container}>
        <Image
        style={styles.icon}
        source={require('./img/logo.png')}
        ></Image>
        <ScrollView style={styles.outerScroll}>
              {this.state.item.map(this.renderRow, this)}
        </ScrollView>
        <TouchableHighlight style={styles.button} onPress={this.onButtonPress.bind(this)}>
                <View style={styles.textContainer}>
                  <Text style={styles.buttonText}>Back</Text>
                </View>
        </TouchableHighlight>
    </View>
    );
  }
  
  renderRow(item, index){

    return (
        <View
          key={index}

        >
          <ItemThings item={item} navigator={this.props.navigator}/>
        </View>
    )
  }

  onButtonPress(){
    this.props.navigator.pop({
      id: 'Home'
    });
  }

};

const styles = StyleSheet.create({
  container: {
    paddingTop:25,
    flex: 4,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
   outerScroll: {
    alignSelf:'stretch',
    backgroundColor:"#ffffff",
    flex: 4,
  },
  bgimage: {
    flex: 1,
    resizeMode: 'contain'
  },
  icon: {
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
  },
});

module.exports = Items;