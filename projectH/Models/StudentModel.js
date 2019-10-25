import { createStore } from 'redux';
import { combineForms } from 'react-redux-form';

const initialStudent = {
    id : 0,
    name: '',
    firstname: '',
    img: '',
    group: ''
}

const store = createStore(combineForms({
    student: initialStudent
}));

export default store;

