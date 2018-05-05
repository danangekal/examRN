import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { 
    Container, Content, List, Body, Button, Card,
    ListItem, Text , Image, Icon, Thumbnail, Right, Left
} from 'native-base';

class HeaderRight extends Component {
    render() {
        return (
        <Button transparent style={styles.buttonHeaderRight} onPress={()=> this.props.navigation.navigate('ProfileAdd')}>
            <Icon name="md-more" />
        </Button>
        )
    }
}

export default class NotificationDetail extends Component {
    static navigationOptions = (props) => ({
        // title: 'Profile Detail',
        headerRight: <HeaderRight {...props} />,
    });

    render() {
        const { profile } = this.props.navigation.state.params

        return (
            <Container>
                <Content>
                    {/* <Image style={styles.imageContent} source={require('../../../assets/images/ttd.jpg')} /> */}
                    <Thumbnail style={styles.thumbnailPhoto} large source={{uri: profile.photo}} />
                    <Card style={styles.card}>
                        <Body>
                            <Text style={styles.text1} >{profile.first_name +' '+ profile.last_name}</Text>
                            <Text style={styles.text2}>{profile.headline}</Text>
                            <Text style={styles.text3}>{profile.education}</Text>
                            <Text style={styles.text3}>{profile.location}</Text>
                            <View>
                                <Button light style={styles.buttonMsg}>
                                    <Text>Message</Text>
                                </Button>
                                <Button info style={styles.buttonCnt}>
                                    <Text>Connect</Text>
                                </Button>
                            </View>
                            <Text style={styles.text3}>{profile.summary}</Text>
                        </Body>
                    </Card>
                    <Card style={styles.card}>
                        <Text style={styles.text3}>Highligts</Text>
                        <List>
                            {profile.highlights_id.map((highlight)=> (
                                <ListItem
                                    key={highlight.objectId}
                                >   
                                    <Thumbnail size={80} source={{uri: highlight.photo}} />
                                    <Body>
                                        <Text>{highlight.title}</Text>
                                        <Text note>{highlight.description}</Text>
                                    </Body> 
                                </ListItem>
                            ))}
                        </List> 
                    </Card>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    thumbnailPhoto: {
        justifyContent: 'center',
        paddingTop: 10
    },
    card: {
        margin: 10,
        height: 300,
    },
    buttonHeaderRight: {
        marginTop: 5,
        marginRight: 20
    },
    titleHeaderRight: {
        color: '#000000',
        fontSize: 18
    },
    titleHeader: {
        color: '#000000',
        fontSize: 18
    },
    buttonMsg: {
        marginLeft: 30
    },
    buttonCnt: {
        marginRight: 30
    },
    imageContent: {
        resizeMode: 'cover',
        height: 200,
        width: null,
        flex: 1,
        margin: 10
    },
    text1: {
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'justify',
        justifyContent: 'center'
    },
    text2: {
        color: '#333333',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'justify',
        justifyContent: 'center'
    },
    text3: {
        color: '#666666',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'justify',
        justifyContent: 'center'
    }

})