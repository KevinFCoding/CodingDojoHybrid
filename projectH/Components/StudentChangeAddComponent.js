import {Button, View} from 'react-native';
import React, { Component } from 'react';

export default class StudentChangeAddComponent extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <View>
                <Button
                    title= "add new player"
                    onPress={() => this.props.navigate('StudentChange', {
                        StudentData: student
                    })}
                />
            </View>

        )

    }
}
