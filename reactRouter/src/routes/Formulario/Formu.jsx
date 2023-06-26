import React from "react";

function Formu ({type,text,name,placeholder,handeonOnChange,value}){
    return(
        <div>
        <label htmlFor={name}>{text}:</label>
        <input type={type}
         name={name} 
         id={name} 
         placeholder={placeholder} 
         onChange={handeonOnChange}
          value={value}
          />
        </div>

    )
}
export default Formu