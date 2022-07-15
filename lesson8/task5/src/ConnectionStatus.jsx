import React, { Component } from "react";

class ConnectionStatus extends Component {
    state = {
        connection: true,
    };
    componentDidMount() {
        window.addEventListener("offline", this.setConnection);
        window.addEventListener("online", this.setConnection);
    }
    componentWillUnmount() {
        window.removeEventListener("offline", this.setConnection);
        window.removeEventListener("online", this.setConnection);
    }

    setConnection = () => {
        this.setState({
            connection: !this.state.connection,
        });
    };

    render() {
        return (
            <div
                className={`${
                    this.state.connection ? "status_online" : "status_offline"
                } status`}
            >
                {this.state.connection ? "Online" : "Offline"}
            </div>
        );
    }
}

export default ConnectionStatus;

///Первое прохождение
//////нажали на кнопку Show
// ----constructor,
// ----render(),
// ----componentDidMount;

//Второе прохождение
/////После нажатия кнопки 'Update'
// ----shouldComponentUpdate();
// ----render();
// ----componentDidUpdate()

// После нажатия кнопки 'Hide'
// ----componentWillUnmount()
