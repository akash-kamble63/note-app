import React from "react";

const Header =({handleDarkMode})=>{

    return(
        <div className="header">
        <h1>My Notes</h1>
        <button onClick={()=>handleDarkMode((preMode)=>!preMode)} className="save">Dark Mode</button>
        </div>
    );
}
export default Header;