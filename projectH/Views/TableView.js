import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import StudentButton from '../Components/StudentButtonComponent'
import StudentAdd from "../Components/StudentChangeAddComponent";

export default class TableView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    key: 1,
                    name: 'Kevin',
                    lastname: 'Fagot',
                    img:'https://images.emojiterra.com/google/android-pie/512px/1f432.png',
                    grp: 'L2_Cergy'
                },
                {
                    key: 2,
                    name: 'Tom',
                    lastname: 'Duverdier',
                    img:'https://images.emojiterra.com/google/android-pie/512px/1f432.png',
                    grp: 'L2_Cergy'
                },
                {
                    key: 3,
                    name: 'Sushi',
                    lastname: 'Kucukoglu',
                    img:'https://images.emojiterra.com/google/android-pie/512px/1f432.png',
                    grp: 'L2_Cergy'
                },
                {
                    key: 4,
                    name: 'Bob',
                    lastname: 'L\'éponge',
                    img:'https://images.emojiterra.com/google/android-pie/512px/1f432.png',
                    grp: 'L1_Cergy'
                },
                {
                    key: 5,
                    name: 'Capitaine',
                    lastname: 'Crabs',
                    img:'https://images.emojiterra.com/google/android-pie/512px/1f432.png',
                    grp: 'L2_Cergy'
                }
            ]
        }
        
    }

    render() {
        let students = this.state.students
        return (
            <View style={styles.container}>
                {students.map(student => {
                    return <StudentButton key={student.key} studentData={student} navigate={this.props.navigation.navigate}/>
                })}

                <View>
                    <StudentAdd studentData="null" navigate={this.props.navigation.navigate}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
});
