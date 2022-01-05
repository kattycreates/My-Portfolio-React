import React from 'react'

const Home = () => {
    return (
        <div id="home">
            <div className="picture">
                <img src='assets/nerdlisa.png' alt='illustrastion'/>
            </div>
            <div className="text">
                <p>Hello,</p>
                <p>I am <span>Karthika!</span></p>
                <p>Front-end developer | Digital artist</p><br />
                <a href="#contact" className='btn'>Hire me</a>

            </div>
            

        </div>
    )
}

export default Home
