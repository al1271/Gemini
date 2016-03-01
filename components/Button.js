'use strict';
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class Button extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.buttonCTA} onPress={this.buttonPress}>
        <Text style={styles.buttonText}>{this.props.textValue}</Text>
      </TouchableHighlight>
    );
  }
  buttonPress() {
    console.log("Button Press");
  }
};

Button.propTypes = {
  textValue: React.PropTypes.string,
  ontouch: React.PropTypes.func
};

Button.defaultProps = {
  textValue: "no value"
};

const styles = StyleSheet.create({
  buttonCTA: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#fc4d54',
    backgroundColor: '#ec1c24',
    width: 200,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'Futura'
  },
});

module.exports = Button;
