import {Component, StyleSheet, View} from 'react-native';

class StudentDetailsComponent extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            studentName: "",
            studentFirstName: "",
            studentImg: "",
            studentGroup: "",
            studentSkills: []
        }
    }

    render(){
        return(

            <View style={styles.view}>


            </View>


        )

    }

    const styles = StyleSheet.create({
        view: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

}
