 import React from "react";
 import moment from "moment";


const formatDate = date => moment(date).format("DD MMM YY");



function Profile(props) {

  
  return (
    <div className="greeting">
   {`${props.userData.firstName} ${props.userData.lastName}. Was born ${formatDate(props.userData.birthDate)} in ${props.userData.birthPlace}`}
    </div>
  );
}



 export default Profile;