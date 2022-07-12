import React from "react";

const UserList = ({ users }) => {
    const userElements = numbers.map((num) => <li key={num}>{num}</li>);
    return (
        <div>
            <button class='btn'>-</button>
            <ul class='users'>
                <li class='user'>
                    <span class='user__name'>Bob</span>
                    <span class='user__age'>21</span>
                </li>
                <li class='user'>
                    <span class='user__name'>Tom</span>
                    <span class='user__age'>17</span>
                </li>

                <li class='user'>
                    <span class='user__name'>Sam</span>
                    <span class='user__age'>45</span>
                </li>
            </ul>
        </div>
    );
};

export default UserList;

// 1.f take arr=[]
// 2. arr =><li>arr[1]</li>
//          <li>arr[2]</li>...
