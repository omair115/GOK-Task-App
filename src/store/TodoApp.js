import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import AddTodo from '../containers/AddTodo'
import VisibleTodos from '../containers/VisibleTodos'

class TodoApp extends Component {

//add todo will add new todo and visibletodos display todos
    render() {
        return (
            <View style={styles.container}>
            
                <AddTodo />

                <View>
                    <VisibleTodos />
                </View>
            </View>
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40

    }
});