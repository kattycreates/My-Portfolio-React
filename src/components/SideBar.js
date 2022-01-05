import React from 'react'

const SideBar = () => {
   
    return (
        
        <div id="mySidebar" class="sidebar">
            <a href="javascript:void(0)" className="closebtn" onclick={closeNav}>×</a>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Works</a>
            <a href="#">Contact</a>
        </div>
        
    )
}

export default SideBar