import React from "react";
import Stats from "./Stats";
import UserList from "./UserList";

function Results(props){
  return (
  <div className="bottom">
        <UserList users={props.users}/>
        <Stats users={props.users}/>
  </div>
  )
}

export default Results;