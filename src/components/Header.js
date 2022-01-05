import React from 'react'

const Header = ({menu,setMenu}) => {
    
    return (
        <header>
            <nav className="navbar">
                <div>
                    <img id="logo" src="assets/logo.png" alt="logo" title="logo" /> 
                    <h3>Karthika Selvam</h3>
                </div>
                
                <ul id="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <i className="fa-solid fa-bars fa-lg" onClick={()=>{setMenu(!menu)}} ></i>
                
                
                

            </nav>
            
        </header>
    )
}

export default Header

/*<div className="hamburger">
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
</div>



onClick={()=>{setMenu(!menu)}} //bar menu
*/