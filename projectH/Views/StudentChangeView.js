import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Form} from 'react-native-elements'


export default class StudentChangeView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Prénom',
            lastname: 'Nom',
            group: 'Groupe d\'études',
            img: 'https://www.pngkey.com/png/full/503-5035055_a-festival-celebrating-tractors-profile-picture-placeholder-round.png',
            skill: []
        }
    }

    render() {

        let student = this.props.navigation.getParam('StudentData');

        console.log("Here for the sep");
        console.log(student);

        console.log(this.state);

        if (student === "null") {

            return (
                <View>
                    <Form>
                        <form>
                            <FormLabel>
                                Nom :
                                <FormInput type="text" name="name" placeholder={this.state.name}/>
                            </FormLabel>
                            <FormLabel>
                                Prénom :
                                <FormInput type="text" name="name" placeholder={this.state.lastname}/>
                            </FormLabel>
                            <FormLabel>
                                Groupe :
                                <FormInput type="text" name="name" placeholder={this.state.grp}/>
                            </FormLabel>
                            <FormLabel>
                                img :
                                <FormInput type="text" name="name" placeholder={this.state.img}/>
                            </FormLabel>

                            <FormInput type="submit" value="Envoyer"/>
                        </form>
                    </Form>
                </View>
            )
        } else {
            return (
                <View>
                    <Form>
                        <form>
                            <FormLabel>
                                Nom :
                                <FormInput type="text" name="name" placeholder={this.student.name}/>
                            </FormLabel>
                            <FormLabel>
                                Prénom :
                                <FormInput type="text" name="name" placeholder={this.student.lastname}/>
                            </FormLabel>
                            <FormLabel>
                                Groupe :
                                <FormInput type="text" name="name" placeholder={this.student.grp}/>
                            </FormLabel>
                            <FormLabel>
                                img :
                                <FormInput type="text" name="name" placeholder={this.student.img}/>
                            </FormLabel>

                            <FormInput type="submit" value="Envoyer"/>
                        </form>
                    </Form>
                </View>
            )
        }
    }
}
