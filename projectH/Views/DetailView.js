import React, { Component } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import StudentEdit from "../Components/StudentChangeAddComponent";
import StudentButton from "../Components/StudentButtonComponent";
// import Image from "react-native-web/dist/exports/Image";

class DetailView extends Component {

    constructor(props) {
        super(props);
    }



    render() {

        let student = this.props.navigation.getParam('StudentData');
        console.log(student);
        return(
            <View styles={styles.container}>
                <Image source={{uri : student.img}}/>
                <Text>
                    Nom : {student.lastname}
                    Prénom : {student.name}
                    Groupe de l'élève : {student.grp}
                </Text>

                <View>
                    <StudentEdit StudentData={student} navigate={this.props.navigation.navigate}/>
                </View>

            </View>
        );
    }
}

export default DetailView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },


});
