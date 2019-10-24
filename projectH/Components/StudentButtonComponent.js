import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'

class StudentButtonComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        student = this.props.StudentData;
        console.log(student)
        return(
            <View>
                <Button title={this.props.StudentData.name}></Button>
            </View>
        );
    }
}

export default StudentButtonComponent;
