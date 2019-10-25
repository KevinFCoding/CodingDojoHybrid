import React, { Component } from 'react'
import {View, Text, TouchableOpacity, Image } from 'react-native'

export default class StudentButtonComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            URL: 'https://images.emojiterra.com/google/android-pie/512px/1f432.png'
        }
    }

    render() {
        let student = this.props.studentData;
        img = { uri: student.img }
        console.log(img);
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={.5}
                    onPress={() => this.props.navigate('DetailView', {
                        studentData: student
                    })}>
                    <Image source={img}/>
                    <Text>{student.name} {student.lastname}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
