import React, { Component } from "react";
import Search from "./UserForm.jsx";

class App extends Component {
    constructor(props) {
        super(props);
    }

    createUser = (obj, event) => {
        event.preventDefault();
        alert(this.obj);
    };
    render() {
        return <Search onSubmit={this.createUser} />;
    }
}

export default App;

// UserForm - отрисовка формы, вызывает ф-ю в onSubmit (controlled) состояние должно быть тут.
// App = отрисовует UserForm. должен быть метод  createUser который принимает объект данных и выводит в консоль
