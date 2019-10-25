import React, { Component } from 'react'
import Image from "react-native-web/dist/exports/Image";
import {View, Text, TouchableOpacity } from 'react-native'

class StudentButtonComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            URL: 'https://images.emojiterra.com/google/android-pie/512px/1f432.png'
        }
    }

    render() {
        let student = this.props.StudentData;
        img = { uri: this.state.URL }
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={.5}
                    onPress={() => this.props.navigate('Detail', {
                        studentData: student
                    })}>
                    <Image source={img} style={{ width: 100, height: 100 }}/>
                    <Text>{student.name} {student.lastname}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default StudentButtonComponent;
