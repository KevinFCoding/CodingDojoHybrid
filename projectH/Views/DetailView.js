import React, { Component } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import StudentEdit from "../Components/StudentChangeAddComponent";

export default class DetailView extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let student = this.props.navigation.getParam('studentData');
        return(
            <View styles={styles.container}>
                <Image source={{uri : student.img}}/>
                <Text>
                    Nom : {student.lastname}
                    Prénom : {student.name}
                    Groupe de l'élève : {student.grp}
                </Text>

                <View>
                    <StudentEdit studentData={student} navigate={this.props.navigation.navigate}/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
