import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Common=(props)=> {
    useEffect(()=>{
        Aos.init({duration:4000})
    })
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div data-aos="zoom-in" className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1 style={{color:'#F1F3F4'}}>{props.title} <strong className="brand-color">Batham Technical</strong></h1>
                                <h5 className="my-3" style={{color:'#A9A9A9'}}>
                                    We are the team of talentet developer making website and mobile app</h5>
                                <div className="mt-3">
                                    <a href="" className="btn btn-outline-info">
                                    {props.btnName}</a>
                                </div>
                            </div>
                            <div data-aos="zoom-out" className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.image} className="img-fluid vert-move" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common
