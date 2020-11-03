/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Platform,
  // eslint-disable-next-line no-unused-vars
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
export default class App extends Component {
  constructor() {
    super();
    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    };
    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape',
    };
    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape',
      });
    });
    this.state = {
      resultText: '',
      calculationText: '0',
    };
    this.functions = [
      'sqrt',
      'e^x',
      'ln',
      'e',
      'pi',
      'x!',
      '10^x',
      'log10',
      'x^2',
      'x^3',
    ];
    this.operations = ['AC', '+', '-', '*', '/'];
  }
  calculateResult() {
    const text = this.state.resultText;
    this.setState({
      // eslint-disable-next-line no-eval
      calculationText: eval(text),
    });
  }
  validate() {
    const text = this.state.resultText;
    switch (text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
      case 'sqrt':
        return false;
    }
    return true;
  }
  buttonPressed(text) {
    if (text == '=') {
      return this.validate() && this.calculateResult();
    }
    this.setState({
      resultText: this.state.resultText + text,
    });
  }
  operate(operation) {
    switch (operation) {
      case 'AC':
        this.setState({
          resultText: '',
          calculationText: '0',
        });
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = this.state.resultText.split('').pop();
        if (this.operations.indexOf(lastChar) > 0) {
          return;
        }
        if (this.state.text == '') {
          return;
        }
        this.setState({
          resultText: this.state.resultText + operation,
        });
    }
  }
  function(functions) {
    switch (functions) {
      case 'e^x':
        this.setState({
          calculationText: Math.pow(2.71, this.state.resultText),
        });
        break;
      case 'sqrt':
        this.setState({
          calculationText: Math.sqrt(this.state.resultText),
        });
        break;
      case 'ln':
        this.setState({
          calculationText: Math.log(this.state.resultText),
        });
        break;
      case 'e':
        this.setState({
          calculationText: Math.E,
        });
        break;
      case 'pi':
        this.setState({
          calculationText: Math.PI,
        });
      case 'x!':
        Math.PI;
        this.setState({
          calculationText: Math.PI,
        });
    }
  }
  render() {
    if (this.state.orientation === 'portrait') {
      return (
        <View style={styles.container}>
          <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.resultText}</Text>
          </View>
          <View style={styles.calculation}>
            <Text style={styles.calculationText}>
              {this.state.calculationText}
            </Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.numbers}>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.empty}
                  onPress={() => this.operate('AC')}>
                  <Text style={styles.btntext}>AC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.empty} />
                <TouchableOpacity style={styles.empty} />
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(7)}>
                  <Text style={styles.btntext}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(8)}>
                  <Text style={styles.btntext}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(9)}>
                  <Text style={styles.btntext}>9</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(4)}>
                  <Text style={styles.btntext}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(5)}>
                  <Text style={styles.btntext}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(6)}>
                  <Text style={styles.btntext}>6</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(1)}>
                  <Text style={styles.btntext}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(2)}>
                  <Text style={styles.btntext}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(3)}>
                  <Text style={styles.btntext}>3</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(0)}>
                  <Text style={styles.btntext}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} />
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed('.')}>
                  <Text style={styles.btntext}>.</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.operations}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.operate('/')}>
                <Text style={[styles.btntext, styles.white]}>/</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.operate('*')}>
                <Text style={[styles.btntext, styles.white]}>*</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.operate('-')}>
                <Text style={[styles.btntext, styles.white]}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.operate('+')}>
                <Text style={[styles.btntext, styles.white]}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.buttonPressed('=')}>
                <Text style={[styles.btntext, styles.white]}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.resultText}</Text>
          </View>
          <View style={styles.calculation}>
            <Text style={styles.calculationText}>
              {this.state.calculationText}
            </Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.numbers}>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.operate('AC')}>
                  <Text style={styles.btntext}>AC</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.operate('AC')}>
                  <Text style={styles.btntext}>+/-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.operate('AC')}>
                  <Text style={styles.btntext}>%</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(7)}>
                  <Text style={styles.btntext}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(8)}>
                  <Text style={styles.btntext}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(9)}>
                  <Text style={styles.btntext}>9</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(4)}>
                  <Text style={styles.btntext}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(5)}>
                  <Text style={styles.btntext}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(6)}>
                  <Text style={styles.btntext}>6</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(1)}>
                  <Text style={styles.btntext}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(2)}>
                  <Text style={styles.btntext}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(3)}>
                  <Text style={styles.btntext}>3</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed(0)}>
                  <Text style={styles.btntext}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} />
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.buttonPressed('.')}>
                  <Text style={styles.btntext}>.</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.operations}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.operate('/')}>
                <Text style={[styles.btntext, styles.white]}>/</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.operate('*')}>
                <Text style={[styles.btntext, styles.white]}>*</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.operate('-')}>
                <Text style={[styles.btntext, styles.white]}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.operate('+')}>
                <Text style={[styles.btntext, styles.white]}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.buttonPressed('=')}>
                <Text style={[styles.btntext, styles.white]}>=</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.operations}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.function('sqrt')}>
                <Text style={[styles.btntext, styles.white]}>sqrt</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.function('e^x')}>
                <Text style={[styles.btntext, styles.white]}>e^x</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.function('ln')}>
                <Text style={[styles.btntext, styles.white]}>ln</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.function('e')}>
                <Text style={[styles.btntext, styles.white]}>e</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.function('pi')}>
                <Text style={[styles.btntext, styles.white]}>π</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.operations}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.function('sqrt')}>
                <Text style={[styles.btntext, styles.white]}>x!</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.function('e^x')}>
                <Text style={[styles.btntext, styles.white]}>10^x</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.function('ln')}>
                <Text style={[styles.btntext, styles.white]}>log10</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.function('e')}>
                <Text style={[styles.btntext, styles.white]}>x^2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.function('pi')}>
                <Text style={[styles.btntext, styles.white]}>x^3</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  empty: {},
  resultText: {
    fontSize: 40,
    color: 'white',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderColor: '#6a6b6d',
    borderWidth: 1,
  },
  btntext: {
    fontSize: 35,
    color: 'white',
  },
  white: {
    color: 'white',
  },
  calculationText: {
    fontSize: 34,
    color: 'white',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  result: {
    flex: 2,
    backgroundColor: '#545559',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  calculation: {
    flex: 1,
    backgroundColor: '#545559',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: '#7d7e80',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#EA8D10',
  },
});
