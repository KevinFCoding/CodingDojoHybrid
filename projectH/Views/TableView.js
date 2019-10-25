import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import StudentButton from '../Components/StudentButtonComponent'
import StudentAdd from "../Components/StudentChangeAddComponent";

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBq5BstxwpBAWKJNWKT8UcJ8tW0TKxofBo",
    authDomain: "cmghybridproject.firebaseapp.com",
    databaseURL: "https://CMGHybridProject.firebaseio.com",
    storageBucket: "cmghybridproject.appspot.com"
};

firebase.initializeApp(firebaseConfig);

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
                    grp: 'L2-Cergy'
                },
                {
                    key: 2,
                    name: 'Tom',
                    lastname: 'Duverdier',
                    img: 'https://images.emojiterra.com/google/android-pie/512px/1f432.png',
                    grp: 'L2-Cergy'
                },
                {
                    key: 3,
                    name: 'Sushi',
                    lastname: 'Kucukoglu',
                    img: 'https://images.emojiterra.com/google/android-pie/512px/1f432.png',
                    grp: 'L2-Cergy'
                },
                {
                    key: 4,
                    name: 'Bob',
                    lastname: 'L\'éponge',
                    img: 'https://images.emojiterra.com/google/android-pie/512px/1f432.png',
                    grp: 'L2-Cergy'
                },
                {
                    key: 5,
                    name: 'Capitaine',
                    lastname: 'Crabs',
                    img: 'https://images.emojiterra.com/google/android-pie/512px/1f432.png',
                    grp: 'L2-Cergy'
                }
            ]
        }
        this.readStudentsData();
    }

    // readStudentsData = () => {
    //     firebase.database().ref('cmghybridproject/').on('value', (snapshot) => {
    //         this.setState({ students: snapshot.val() }, () => {
    //             console.log(this.state.students);
    //         })
    //     });
    // };

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
                <View style={styles.buttonAdd}>
                    <StudentAdd StudentData="null" navigate={this.props.navigation.navigate} />
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
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    buttonAdd: {
        marginBottom: 30
    }
});