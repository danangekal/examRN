import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
    Container, Content, Body,
    List, ListItem, Spinner, Right, Icon,
    Button, Text, Title, Thumbnail
} from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { allProfiles } from '../action';

class HeaderTitle extends Component{
    render() {
        return (
            <Title style={styles.titleHeader}>Profile List</Title>
        )
    }
}
  
class HeaderRight extends Component {
    render() {
        return (
        <Button transparent style={styles.buttonHeaderRight} onPress={()=> this.props.navigation.navigate('ProfileAdd')}>
            <Title style={styles.titleHeaderRight}>Tambah</Title>
        </Button>
        )
    }
}

class ProfileList extends Component {
    componentDidMount() {;
        this.props.dispatch(allProfiles());
    }

    static navigationOptions = (props) => ({
        headerTintColor: '#FFFFFF',
        headerTitle: <HeaderTitle />,
        headerRight: <HeaderRight {...props} />,
        headerStyle: {
            backgroundColor: '#4a77e0',
            paddingLeft: 20
        },
    });
    
    render() {
        return (
        <Container>
            <Content>
            {this.props.profilesReducer.isLoading? (
                <Spinner/>
            ): (
                <List>
                    {this.props.profilesReducer.profiles.map((profile)=> (
                        <ListItem
                            key={profile.objectId}
                            onPress={()=> {
                                this.props.navigation.navigate(
                                    'ProfileDetail', {
                                    profile
                                })
                            }}
                        >   
                            <Thumbnail size={80} source={{uri: profile.photo}} />
                            <Body>
                                <Text>{profile.first_name +' '+ profile.last_name}</Text>
                                <Text note>{profile.headline}</Text>
                            </Body>  
                            <Right>
                                <Text style={styles.textView}>View</Text>
                            </Right>
                        </ListItem>
                    ))}
                </List> 
            )}
            
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

export default connect(mapStateToProps)(ProfileList);

const styles = StyleSheet.create({
    buttonHeaderRight: {
        marginTop: 5,
        marginRight: 20
    },
    titleHeaderRight: {
        color: '#FFFFFF',
        fontSize: 18
    },
    titleHeader: {
        color: '#FFFFFF',
        fontSize: 18
    },
    textView: {
        color: '#0000FF',
    }
})