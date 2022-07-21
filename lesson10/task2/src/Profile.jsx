import React from 'react';
import UserForm from './UserForm.jsx';

const Profile = ({ userData, onChange }) => {
    return (
        <div className="column">
            {/* <!-- UserForm --> */}
            <UserForm userData={userData} onChange={onChange} />
        </div>
    );
};

export default Profile;
