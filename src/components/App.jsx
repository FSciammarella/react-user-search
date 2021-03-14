import React, { useEffect, useState } from "react";
import Title from "./Title"
import QueryBox from "./QueryBox"
import Results from "./Results"


const App = (props)=>{

  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    if(!loaded){
      // fetch("http://localhost:3001/users").then(
      fetch("https://randomuser.me/api/?results=5000").then(
        res=>res.json().then(
          data=>{
            setAllUsers(data.results);
            setLoaded(true)
            console.log(data.results)
          }
        )
      )
    }
  // eslint-disable-next-line
  },[])

  return (
    <>
      <Title title="Pesquisa de Usuários"/>
      <QueryBox userList={allUsers} handler={setUsers}/>
      <Results users ={users}/>
    </>
  )
}

export default App;