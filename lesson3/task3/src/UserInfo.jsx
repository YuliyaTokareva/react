import React from "react";
import Avatar  from "./Avatar.jsx";

const UserInfo = props =>{

return (<div className="user-info">
        <Avatar name={props.autor.name} 
        avatarUrl={props.autor.avatarUrl}
        />
        <div className="user-info__name">{props.autor.name}</div>
        
      </div>)
}

export default UserInfo;