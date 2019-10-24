import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import Image from "react-native-web/dist/exports/Image";

class StudentButtonComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let student = this.props.StudentData;
        console.log(student.name);
        return(
            <View>
                <Button
                    title={student.name}
                    onPress={() => this.props.navigate('Detail', {
                        StudentData: student
                    })}
                />
            </View>
        );
    }
}

export default StudentButtonComponent;
