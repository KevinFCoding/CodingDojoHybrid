import React, { Component } from 'react'
import { View, Text } from 'react-native'

import StudentButton from '../Components/StudentButtonComponent'

class TableView extends Component {

    constructor() {
        super()
        this.state = { 
            students: [
                {
                    name: 'Kevin',
                    lastname: 'Fagot'
                },
                {
                    name: 'Tom',
                    lastname: 'Duverdier'
                },
                {
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
                    return <StudentButton StudentData={student}></StudentButton>
                })}
            </View>
        );
    }
}  

export default TableView;