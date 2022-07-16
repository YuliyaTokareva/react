import React, { Component } from "react";

class ConnectionStatus extends Component {
    state = {
        connection: true,
    };
    componentDidMount() {
        window.addEventListener("online", () =>
            this.setState({ connection: true })
        );

        window.addEventListener("offline", () =>
            this.setState({ connection: false })
        );
    }
    componentWillUnmount() {
        window.removeEventListener("online", () =>
            this.setState({ connection: true })
        );

        window.removeEventListener("offline", () =>
            this.setState({ connection: false })
        );
    }

    render() {
        return (
            <div
                className={`${
                    this.state.connection ? "status_online" : "status_offline"
                } status`}
            >
                {this.state.connection ? "online" : "offline"}
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
