import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import StudentButton from '../Components/StudentButtonComponent'
import StudentAdd from "../Components/StudentChangeAddComponent";

class TableView extends Component {

    constructor() {
        super()
        this.state = {
            students: {} 
        }
    }

    readStudentsData = () => {
        firebase.database().ref('cmghybridproject/').once('value', (snapshot) => {
            this.setState({ students: snapshot.val() }, () => {
                console.log(this.state.students);
            })
        });
    };

    render() {
        students = this.state.students
        return (
            <View style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
        // textAlign: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

// this.state = { 
//     students: [
//         {
//             key: 1,
//             name: 'Kevin',
//             lastname: 'Fagot'
//         },
//         {
//             key: 2,
//             name: 'Tom',
//             lastname: 'Duverdier'
//         },
//         {
//             key: 3,
//             name: 'Sushi',
//             lastname: 'Kucukoglu'
//         },
//         {
//             key: 4,
//             name: 'Bob',
//             lastname: 'L\'éponge'
//         },
//         {
//             key: 5,
//             name: 'Capitaine',
//             lastname: 'Crabs'
//         }
//     ]
// }
