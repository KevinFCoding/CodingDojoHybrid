import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import {Firebase as firebase} from "react-native-firebase";

class HomePageView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usernameInput: '',
            passwordInput: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Email input"
                    onChangeText={(text) => { this.setState({ usernameInput: text }) }}
                    style={styles.textInput}
                />
                <TextInput placeholder="Password input"
                    onChangeText={(text) => { this.setState({ passwordInput: text }) }}
                    style={styles.textInput}
                />
                <Button
                    title="Validate"
                    onPress={() => this.login()} 
                    style={styles.validateButton}/>
            </View>
        );
    }

    login = () => {
        if(this.state.usernameInput === '' && this.state.passwordInput === ''){
            this.props.navigation.navigate('Table')
        } else {
            firebase.auth().signInWithEmailAndPassword(this.state.usernameInput, this.state.passwordInput).then(() => {
                this.props.navigation.navigate('Table')
            }).catch((error) => {
               console.log(error); 
            });
        }
    };
}

export default HomePageView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 40
    },
    validateButton: {
        marginTop: 100
    }
});
