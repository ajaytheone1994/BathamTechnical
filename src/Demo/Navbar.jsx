import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-10 mx-auto">
                        <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-white">
                            <div className="container-fluid">
                                <NavLink to="/" className="navbar-brand" style={{color:'#F7CE12', fontWeight:'bold'}}>Batham Technical <div className="object"><img src={require('../assets/images/EmailIcon.png')}/></div></NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active" exact className="nav-link active"  to="/" aria-current="page">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active" to="/service" className="nav-link">Service</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active" to="/about" className="nav-link">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu-active" to="/contact" className="nav-link">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
