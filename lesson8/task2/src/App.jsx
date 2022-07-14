import React from "react";
import Clock from "./Clock.jsx";

const App = () => {
    return (
        <>
            <Clock offset={0} location='London' />
            <Clock offset={2} location='Kyiv' />
            <Clock offset={-5} location='New York' />
        </>
    );
};

export default App;

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
