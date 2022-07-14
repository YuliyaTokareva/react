import React from "react";
import Clock from "./Clock.jsx";

const App = () => {
    return (
        <>
            <Clock offset={0} location='London' />
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
