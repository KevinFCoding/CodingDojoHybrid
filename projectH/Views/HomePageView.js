import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

class HomePageView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>CGM</Text>
                <Button
                    title="Let's go"
                    onPress={() => this.props.navigation.navigate('Table')}/>
            </View>
        );
    }
}

export default HomePageView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});