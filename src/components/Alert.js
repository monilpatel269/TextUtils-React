import React from 'react'

export default function Alert(props) {
  const capitalize = (word)=>{
    let alerText_type = word.toLowerCase();
    return alerText_type.charAt(0).toUpperCase() + alerText_type.slice(1);
  }
  return (
    <div style={{height:'50px'}}>
    {props.alertText && <div className={`alert alert-${props.alertText.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alertText.type)}</strong>: {props.alertText.msg}
    </div>}
    </div>
   
  )
}
