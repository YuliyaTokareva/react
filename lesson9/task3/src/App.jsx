import React, { Component } from 'react';
import UserForm from './UserForm.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        //this.input = React.createRef();
    }

    createUser = (event, form) => {
        event.preventDefault();
        const formData = [...new FormData(form)].reduce(
            (acc, [name, value]) => ({ ...acc, [name]: value }),
            {},
        );
        console.log(Object.values(formData));
    };
    render() {
        return <UserForm onSubmit={this.createUser} />;
    }
}

export default App;

// UserForm - отрисовка формы, вызывает ф-ю в onSubmit (controlled) состояние должно быть тут.
// App = отрисовует UserForm. должен быть метод  createUser который принимает объект данных и выводит в консоль
