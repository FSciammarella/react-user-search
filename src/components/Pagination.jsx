import React, { useContext } from "react"
import {PageContext} from "./UserList"
import PageButton from "./PageButton"

function Pagination(props){

  const {page, setPage, length} = useContext(PageContext);

  function handleChange(evt){
    setPage(page=>parseInt(evt.target.value-1))
  }

  function validateChange(evt){
    const triedValue = Number.parseInt(evt.target.value);
    if(triedValue>0 && !isNaN(triedValue)){
      if ((length/(triedValue*50))>=1){
        setPage(triedValue-1);
      }else{
        evt.target.value=Math.floor((length/(50))+1)
        setPage(evt.target.value-1)
      }
    }else{
      evt.target.value=1
      setPage(evt.target.value-1)
      
    }

  }
  
  return(
      <div className="page-btn-container">
        <PageButton type="prev"/>
        <input type="text" onChange={validateChange} onBlur={handleChange} value={page+1} />
        <PageButton type="next"/>
      </div>
  )

}

export default Pagination;