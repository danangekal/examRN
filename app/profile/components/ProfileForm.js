import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Form, Label, 
    Title, Button
} from 'native-base';
import { Field, reduxForm } from 'redux-form';
import Validator from 'validatorjs';
import lang from 'validatorjs/src/lang';
import en from 'validatorjs/src/lang/en';
lang._set('en', en);

import Input from '../../redux/redux-form/Input';

const validate = values => {
    const rules = {
        first_name: 'required',
        headline: 'required',
        current_position: 'required',
        education: 'required',
        location: 'required',
        summary: 'required',
    };

    const validator = new Validator(values, rules);
    if(validator.fails()){
        return validator.errors.all();
    }
}

class ProfileForm extends Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <Form>
                <Field name="first_name" component={Input} label="First Name" 
                    returnKeyType="next"
                />
                <Field name="last_name" component={Input} label="Last Name" 
                    returnKeyType="next"
                />
                <Field name="headline" component={Input} label="Headline" 
                    returnKeyType="next"
                />
                <Field name="current_position" component={Input} label="Curent Position" 
                    returnKeyType="next"
                />
                <Field name="education" component={Input} label="Education" 
                    returnKeyType="next"
                />
                <Field name="Location" component={Input} label="Location" 
                    returnKeyType="next"
                />
                <Button block style={styles.buttonSubmit} onPress={ handleSubmit }>
                    <Title>Simpan</Title>
                </Button>
            </Form>
        );
    }
}

const ReduxForm = reduxForm({
  form: 'profile',
  validate,
})(ProfileForm)

export default ReduxForm;

const styles = StyleSheet.create({
    buttonSubmit: {
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      marginTop: 10,
      backgroundColor: '#0000FF' // green
    },
  })
  