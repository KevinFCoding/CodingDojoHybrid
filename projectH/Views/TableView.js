import React, { Component } from 'react'
import { View, Text } from 'react-native'

import StudentButton from '../Components/StudentButtonComponent'

class TableView extends Component {

    constructor() {
        super()
        this.state = { 
            students: [
                {
                    key: 1,
                    name: 'Kevin',
                    lastname: 'Fagot'
                },
                {
                    key: 2,
                    name: 'Tom',
                    lastname: 'Duverdier'
                },
                {
                    key: 3,
                    name: 'Sushi',
                    lastname: 'Kucukoglu'
                }
            ]
        }
    }

    render() {
        students = this.state.students

        console.log(students)
        return(
            <View>
                {students.map(student => {
                    return <StudentButton key={student.key} StudentData={student} navigate={this.props.navigation.navigate}></StudentButton>
                })}
            </View>
        );
    }
}  

export default TableView;