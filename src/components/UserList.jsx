import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import User from "./User";

export let PageContext= React.createContext({
  page:0,
  setPage:()=>{},
  length:0
})

function UserList(props){
  
  const [page, setPage] = useState(0);
  useEffect(()=>{
    setPage(0);
  },[props.users])

  return (
        <div className="container">
          <h2 className="found">
            <span className="total">{props.users?.length??'0'}</span> Usuário(s) encontrado(s)
          </h2>
          <PageContext.Provider value={{page, setPage, length:props.users?.length}}>
          {props.users?.length ? <Pagination />:""}
          </PageContext.Provider>
          <ul className="user-list">
            {props.users?.slice(page*50,page*50+50).map((user,idx)=><User key={idx} user={user} />)}
          </ul>
        </div>
      )
}

export default React.memo(UserList);