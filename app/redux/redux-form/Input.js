import React, { Component } from 'react';
import { Item, Input, Label, Text, Icon } from 'native-base';
import {View, StyleSheet} from 'react-native';

export default class InputField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      secureTextEntry: props.secureTextEntry
    }
  }

  render() {
    const { input, label, secureTextEntry,
      keyboardType, onSubmit, onChange,
      getRef, disabled, autoFocus,
      returnKeyType, autoCapitalize,
      meta: { touched, error, warning }
    } = this.props;
    return (
      <View style={styles.container}>
        {label? <Label style={[styles.label, this.state.focus ? {color: '#276E0A'} : null]}>{error ? `${label} *` : label}</Label>:null}
        <Item style={this.state.focus ? styles.containerInput : {marginLeft: 0}} error={touched && error? true: false}>
          <Input {...input}
            onFocus={()=>this.setState({focus: true})}
            onBlur={()=>this.setState({focus: false})}
            value={input.value.toString()}
            disabled={disabled ? disabled : false}
            getRef={(c) => typeof(getRef) == 'function' ? getRef(c) : null}
            secureTextEntry={this.state.secureTextEntry}
            keyboardType={keyboardType}
            onSubmitEditing={onSubmit}
            onChangeText={onChange}
            autoFocus={autoFocus}
            returnKeyType={returnKeyType}
            autoCapitalize={autoCapitalize}
            // style={[styles.input, disabled ? {color: 'gray'} : null]}
          />
          { secureTextEntry ? <Icon onPress={()=>this.setState({secureTextEntry: !this.state.secureTextEntry})} active name={this.state.secureTextEntry ? "md-eye-off" : "md-eye"} style={{color: '#ababb9'}} /> : null }

        </Item>
        <Text style={styles.formMessage} note>{touched && error ? error : ""}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  containerInput: {
    borderBottomColor: '#276E0A',
    marginLeft: 0
  },
  label: {
    color: '#bebebe'
  },
  formMessage: {
    color: '#d9534e',
  },
  input: {
    marginTop: 5,
    paddingLeft: 0,
    marginBottom: 5
  }
})