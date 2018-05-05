import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Title, Content,
  Form, Item, Input,
  Button, Icon, Text, Label, Grid, Col
} from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import ProfileForm from '../components/ProfileForm';
import { allProfiles, createProfiles } from '../action';

class HeaderTitle extends Component{
  render() {
    return (
      <Title style={styles.titleHeader}>Profile Add</Title>
    )
  }
}

class ProfileAdd extends Component {
  static navigationOptions = (props) => ({
    headerTintColor: '#276E0A',
    headerTitle: <HeaderTitle />,
  });

  handleSubmit = (data) => {
    this.props.dispatch(createProfiles(data))
    .then((result) => {
        this.props.dispatch(allProfiles());
        this.props.navigation.goBack(); 
    })
    .catch(function (error) {
        console.log(error);
        alert(error); 
        return false;
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <ProfileForm {...this.props} onSubmit={this.handleSubmit} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state)=> {
    return {
        profilesReducer: state.profilesReducer
    }
}

export default connect(mapStateToProps)(ProfileAdd);

const styles = StyleSheet.create({
  buttonHeaderRight: {
    marginTop: 5,
    marginRight: 20
  },
  titleHeaderRight: {
    color: '#000000', // black
    fontSize: 18
  },
  titleHeader: {
    color: '#000000', // black
    fontSize: 18
  },
  labelForm: {
    fontSize: 15,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: -10
  }
})
