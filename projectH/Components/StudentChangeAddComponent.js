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
                    title= "Edit"
                    onPress={() => this.props.navigate('StudentChangeView', {
                        studentData: this.props.studentData
                    })}
                />
            </View>

        )

    }
}
