import React from "react";

const NumbersList = ({ numbers }) => {
    // const numberElements = numbers.map((num) => <li key={num}>{num}</li>);
    return (
        <ul>
            {numbers.map((num) => (
                <li key={num}>{num}</li>
            ))}
        </ul>
    );
};

export default NumbersList;

// 1.f take arr=[]
// 2. arr =><li>arr[1]</li>
//          <li>arr[2]</li>...
