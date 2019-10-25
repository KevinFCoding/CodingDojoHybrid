import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

export default class StudentButtonComponent extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     URL: 'https://images.emojiterra.com/google/android-pie/512px/1f432.png'
        // }
    }

    render() {
        let student = this.props.StudentData;
        img = { uri: student.img }
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={.5}
                    onPress={() => this.props.navigate('Detail', {
                        StudentData: student
                    })}>
                    <Image source={img}/>
                    <Text>{student.name} {student.lastname}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
