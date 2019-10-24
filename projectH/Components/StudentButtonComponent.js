import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'

class StudentButtonComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let student = this.props.StudentData;
        console.log(student)
        return(
            <View>
                <Button
                    title={student.name}
                    onPress={() => this.props.navigate('Detail', {
                        studentData: student
                    })}
                />
            </View>
        );
    }
}

export default StudentButtonComponent;
