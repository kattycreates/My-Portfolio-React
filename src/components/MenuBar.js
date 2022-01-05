import React from 'react'

const MenuBar = ({menu,setMenu}) => {
    const handleToggle=()=>{
        setMenu(!menu);
    }
    return (
        <>
        {menu?(<div className="vertical-menubar">
            <i className="fas fa-times fa-2x close-btn" onClick={handleToggle}></i>
            <ul id="v-menu">
                <li><a href="#home" onClick={handleToggle}>Home</a></li>
                <li><a href="#about" onClick={handleToggle} >About</a></li>
                <li><a href="#works" onClick={handleToggle}>Works</a></li>
                <li><a href="#contact" onClick={handleToggle}>Contact</a></li>
            </ul>
        </div>):(<></>)}
        </>
    )
}

export default MenuBar
