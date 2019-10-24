import React, { Component } from 'react'
import { View } from 'react-native'

import StudentButton from '../Components/StudentButtonComponent'
import StudentAdd from "../Components/StudentChangeAddComponent";

class TableView extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            students: [
                {
                    key: 1,
                    name: 'Kevin',
                    lastname: 'Fagot',
                    img: 'https://images.emojiterra.com/google/android-pie/512px/1f432.png',
                    grp : 'L2'
                },
                {
                    key: 2,
                    name: 'Tom',
                    lastname: 'Duverdier',
                    img: 'https://images.emojiterra.com/google/android-pie/512px/1f432.png',
                    grp : 'L2'
                },
                {
                    key: 3,
                    name: 'Sushi',
                    lastname: 'Kucukoglu',
                    img: 'https://images.emojiterra.com/google/android-pie/512px/1f432.png',
                    grp : 'L2'
                }
            ]
        }
    }

    render() {
        let students = this.state.students
        return(
            <View>
                {students.map(student => {
                    return <StudentButton key={student.key} StudentData={student} navigate={this.props.navigation.navigate}></StudentButton>
                })}
                <View>
                    <StudentAdd StudentData="null" navigate={this.props.navigation.navigate}/>
                </View>
            </View>
        );
    }
}  

export default TableView;
