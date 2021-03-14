import React, { useContext } from "react";
import {PageContext} from "./UserList"

function PageButton(props){
  const {page, setPage, length} = useContext(PageContext);
  if (props.type==="prev"){
    return(
      <button style={page?{}:{visibility:"hidden"}} onClick={()=>setPage(page=>page-1)}>
        <i className="fas fa-backward"/>
      </button>
    )
  }else if(props.type==="next"){
    return (
    <button style={
      (length)/((page+1)*50)>=1
      ? {}
      : {visibility:"hidden"}}
      onClick={()=>setPage(page=>page+1)}>
      <i className="fas fa-forward"/>
    </button>)
  }
}

export default PageButton;