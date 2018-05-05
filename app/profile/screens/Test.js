import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import axios from 'axios';

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        };
    }

    componentDidMount(){
        let url = `https://api.backendless.com/3DF64205-BC27-11F7-FF3F-D962FB726100/544CDA37-D3EF-0D33-FF1B-4C943251C800/data/notifiactions`;
        url += `?sortBy=created`;
        axios.get(url)
        .then((result) => {
          console.log(result);
          let notifications = result.data
          this.setState({ notifications })
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    static navigationOptions = {
        title: 'Notification List',
    };

    render() {
        return (
            <Container>
                <Content>
                    <List>
                    {this.state.notifications.map((item) => (
                        <ListItem
                            key={item.id}
                            // onPress={()=> {
                            //     this.props.navigation.navigate(
                            //         'TestDetail', {
                            //         item
                            //     })
                            // }}
                        >
                            <Text>{item.title}</Text>
                        </ListItem>
                     ))}
                    </List>
                </Content>
            </Container>
        )
    }
}