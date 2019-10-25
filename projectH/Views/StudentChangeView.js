import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import { TextInput, FormLabel, FormInput, Form} from 'react-native-elements'


export default class StudentChangeView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Prénom',
            lastname: 'Nom',
            group: "Groupe d'études",
            img: 'https://www.pngkey.com/png/full/503-5035055_a-festival-celebrating-tractors-profile-picture-placeholder-round.png',
           
            skill: []
        }
    }
    //let student = this.props.navigation.getParam('studentData');
    render() {

        let student = this.props.navigation.getParam('studentData');

        console.log("Here for the sep");
        console.log(student);

        sendDataToTable(isNewStudent);
            
          

        if (student === 'null') {

            return (
                <View>
                    <TextInput label={"Prénom :"} placeholder={this.state.name} type="text" name="name" onChangeText={(text) => setState({name : text})}/>

                    <TextInput label={"Nom :"} placeholder={this.state.lastname} type="text" name="lastname" onChangeText={(text) => setState({lastname :text})}/>

                    <TextInput label={"Groupe :"} placeholder={this.state.group} type="text" name="group" onChangeText={(text) => setState({group : text})}/>

                    <TextInput label={"Image :"} placeholder={this.state.img} type="text" name="img" onChangeText={(text) => setState({img : text})}/>

                    <Button title="Envoyer"/>
                </View>
            );
            
        } else {
            return (
                <View>
                    <TextInput label={"Prénom :"} placeholder={student.name} type="text" name="name" onChangeText={(text) => setState({name : text})}/>

                    <TextInput label={"Nom :"} placeholder={student.lastname} type="text" name="lastname" onChangeText={(text) => setState({lastname : text})}/>

                    <TextInput label={"Groupe :"} placeholder={student.grp} type="text" name="group" onChangeText={(text) => setState({group : text})}/>

                    <TextInput label={"Image :"} placeholder={student.img} type="text" name="img" onChangeText={(text) => setState({img : text})}/>

                    <Button title="Envoyer"/>
                </View>
            );
        }
    }
}
