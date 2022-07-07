const rootElement = document.querySelector("#root");

const elem = React.createElement("div", { className: "greeting" }, [
    React.createElement(
        "div",
        { className: "greeting__title" },
        "Hello, world!"
    ),
    React.createElement(
        "div",
        { className: "greeting__text" },
        "I'm learning React"
    ),
]);

ReactDOM.render(elem, rootElement);
