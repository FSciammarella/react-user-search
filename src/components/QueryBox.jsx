import React, { useEffect, useRef, useState } from "react";

function QueryBox(props){
  const [query, setQuery] = useState('');
  const filterUsers = useRef();
  
  filterUsers.current=()=>{
    console.log("filtering...")
    if (query===''){
      props.handler([])
      return
    }
    props?.handler(
      props.userList?.filter(
        user=>
        (user.name.first+' '+user.name.last)
        .toLowerCase()
        .includes(query.toLowerCase())))
  }

  useEffect(()=>{
    filterUsers.current()
  },[query,filterUsers])

  function handleButton(evt){
    evt.preventDefault()
  }
  function handleChange(evt){
    setQuery(evt.target.value);
  }

  return (
  <div className="query-box">
    <form>
      <label htmlFor="search-box">Busca</label>
      <input type="text"
             className="search-box"
             placeholder="Digite aqui sua busca"
             value={query}
             onChange={handleChange}
             />
      <button className="submit-btn" onClick={handleButton}>Buscar</button>
    </form>
  </div>)
}

export default QueryBox;