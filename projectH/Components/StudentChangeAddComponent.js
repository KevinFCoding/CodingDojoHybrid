import {Button, View} from 'react-native';
import React, { Component } from 'react';

export default class StudentChangeAddComponent extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        let student = this.props.StudentData;

        return (

            <View>
                <Button
                    title= "Edit"
                    onPress={() => this.props.navigate('StudentChange', {
                        StudentData: student
                    })}
                />
            </View>

        )

    }
}
