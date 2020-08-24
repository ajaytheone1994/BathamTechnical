import React, { useEffect } from 'react'
import Common from '../Demo/Common';
import Aos from 'aos';
import 'aos/dist/aos.css';
import service from '../assets/images/serviece.jpg';
import sfirstimage from '../assets/images/service.jpg';
import ServiceCard from '../Demo/ServiceCard';
import image from '../Demo/Images'
const  Service=()=> {
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    const data = [
        { image:  image.webimage, title: 'Web Development' },
        { image: image.mobimae, title: 'Mobile App Development' },
        { image: image.digitalimage, title: 'Digital Marketing' },
        { image: image.androidImage, title: 'Android App Development' },
        { image: image.webhosting, title: 'Web hosting' },
        { image: image.typingImage, title: 'Online Typing work' }
    
    ]
    return (
        <>
            <Common title="Welcome at Service   "
             image={service}
             btnName={"Get Started"}
             visit={"/"}
             />
            <div data-aos="fade-down" className="my-3">
                <h1 className="text-center">Our Services</h1>
                <p className="text-center">We Provide Online Service & customer Satisfection</p>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div data-aos="zoom-out" className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                data.map((val, index)=>{
                                  return  <ServiceCard
                                    image={val.image}
                                    title={val.title}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Service
