import React from "react";

function User(props){
  return (
        <li>
          <img src={props.user.picture.thumbnail} alt="avatar" className="avatar"/>
          <p>{props.user.name.first} {props.user.name.last}, {props.user.dob.age}</p>
        </li>
      )
}

export default User;