import React, { Component } from 'react'
import { View, Text } from 'react-native'

class DetailView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        student = this.props.navigation.getParam('studentData', 'sent nothing');
        return(
            <View>
                <Text>
                    {student.name}
                </Text>
            </View>
        );
    }
}

export default DetailView;