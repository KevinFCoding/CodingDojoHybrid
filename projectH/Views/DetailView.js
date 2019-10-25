import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import StudentEdit from "../Components/StudentChangeAddComponent";
// import StudentButton from "../Components/StudentButtonComponent";

class DetailView extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let student = this.props.navigation.getParam('StudentData');
        let img = { uri: student.img }
        console.log(student);
        return (
            <View styles={styles.container}>
                <View style={styles.infoList}>
                    <Image source={img} style={{ width: 100, height: 100 }}/>
                    <Text>
                        <Text style={styles.infoLabel}>Prénom : </Text>
                        {student.name}
                    </Text>
                    <Text>
                        <Text style={styles.infoLabel}>Nom : </Text>
                        {student.lastname}
                    </Text>
                    <Text>
                        <Text style={styles.infoLabel}>Groupe de l'élève : </Text>
                        {student.grp}
                    </Text>
                </View>
                <View>
                    <StudentEdit StudentData={student} navigate={this.props.navigation.navigate} />
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
        justifyContent: 'space-between'
    },
    infoList: {
        marginLeft: 30
    },
    infoLabel: {
        color: '#808080'
    }
});
