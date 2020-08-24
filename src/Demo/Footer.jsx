import React from 'react'
import {NavLink} from 'react-router-dom';
import './style.css'
function Footer() {
    return (
        <>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <div>
                         <h1 className="zoom" style={{color:'#fff'}}>Batham Technical</h1>
                    </div>

                    <p className="footer-links">

                        <NavLink to="/" className="navlink">Home</NavLink>
                        <NavLink to="/posts" className="navlink">Service</NavLink>
                        <NavLink to="/about-us" className="navlink">About Us</NavLink>
                        <NavLink to="/contact-us" className="navlink">Contact Us</NavLink>
                    </p>

                    <p className="footer-company-name">Batham Technical © 2020</p>
                </div>

                <div className="footer-center">

                    <div>
                        <img src={require('../assets/images/icon/pin.png')} style={{ verticalAlign: 'middle' }} className="zoom" />&nbsp;&nbsp;
        <p><span className="navlink">713, Kesav bidi factory</span> Hathiyapour, Ghasmandi, Gwalior M.P.</p>
                    </div>

                    <div>
                        <img src={require('../assets/images/icon/phone-call.png')} style={{ verticalAlign: 'middle' }} className="zoom" />&nbsp;&nbsp;
        <p className="navlink">+91(9993266289)</p>
                    </div>

                    <div style={{ marginTop: '10px' }}>
                        <img src={require('../assets/images/icon/arroba.png')} style={{ verticalAlign: 'middle' }} className="zoom" />&nbsp;&nbsp;
        <p className="navlink" style={{ color: '#000' }}>ajaybatham306@gmail.com</p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span className="navlink">About the company</span>
                        At <strong className="navlink">Batham Technical</strong>, we develop innovative and creative products and services that provide total communication
                        and information solutions. Among a plethora of services, web design and development.
    </p>

                    <div className="footer-icons">

                        <a href="https://www.facebook.com/profile.php?id=100008978260382" style={{ textDecoration: 'none', backgroundColor: '#FFC107' }}><img src={require('../assets/images/icon/Ffacebook.png')} className="zoom" /></a>&nbsp;
   <a href="https://twitter.com/ajaybat16894008" style={{ textDecoration: 'none', backgroundColor: '#FFC107' }}><img src={require('../assets/images/icon/ftwitter.png')} className="zoom" /></a>&nbsp;
  <a href="https://www.linkedin.com/in/ajay-batham-922041162" style={{ textDecoration: 'none', backgroundColor: '#FFC107' }}><img src={require('../assets/images/icon/footerlinkedin.png')} className="zoom" /></a>&nbsp;
  <a href="https://github.com/ajaytheone1994" style={{ textDecoration: 'none', backgroundColor: '#FFC107' }}><img src={require('../assets/images/icon/fgithub.png')} style={{ borderRadius: '2px' }} className="zoom" /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
