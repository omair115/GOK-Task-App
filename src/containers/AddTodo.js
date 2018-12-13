import React, { Component } from "react"
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'
import {addTodo} from '../actions/index'

import { Container, Header, Item, Icon, Button ,Input} from 'native-base';
class AddTodo extends Component {

    state = {
        text: ''
    }

    addTodo = (text) => {
        //redux store 
        this.props.dispatch(addTodo(text))
        this.setState({ text: '' })
    }

    render() {
       
         
            return (
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <TextInput searchBar rounded
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                        placeholder="Create New ToDo"
                        style={{ borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5 }}
                    />
                    <Button transparent onPress={() => this.addTodo(this.state.text)}>
                    <Text>Create</Text>
                    </Button>
                </View>
           
        );
    }
}
//for connecting redux store
export default connect()(AddTodo);

// import React, { Component } from 'react';
// import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
// export default class SearchBarExample extends Component {
//   render() {
//     return (
//       <Container>
//         <Header searchBar rounded>
//           <Item>
//             <Icon name="ios-search" />
//             <Input placeholder="Search" />
//             <Icon name="ios-people" />
//           </Item>
//           <Button transparent>
//             <Text>Search</Text>
//           </Button>
//         </Header>
//       </Container>
//     );
//   }
// }