import React from 'react'

const Navbar = () => {
  return (
    <div id="header">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="navbar-brand d-block d-lg-none" href="#">
                    <a href="#"><h2 className="logo"><strong>A</strong>nsh</h2></a>
                </div>
                <button className="navbar-toggler navbar_toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                         <div className="navbar-brand d-none d-lg-block" href="#">
                        <a href="#"><h2 className="logo center-logo"><strong>a</strong>nsh</h2></a>
                    </div>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about-me">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Work Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hobbies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                   
                    <ul className="navbar-nav">
                        
                    </ul>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar

