import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import image from '../Demo/Images'
import homeimage from '../assets/images/home.png';
import sfirstimage from '../assets/images/service.jpg';
import Common from '../Demo/Common';
import ServiceCard from '../Demo/ServiceCard';
import ContactUs from '../Demo/ContactUs';
import ajay from '../assets/images/ajay.jpg';
import ashu from '../assets/images/ashu.jpg';
import atul from '../assets/images/atul.jpg';
import rohindra from '../assets/images/rohindra.png';
import vivek from '../assets/images/vivek.jpg';
import abdul from '../assets/images/abdul.jpg';

const Home=()=> {
    useEffect(()=>{
        Aos.init({duration:2000});
    }, []);
    const data = [
        { image:  image.webimage, title: 'Web Development' },
        { image: image.mobimae, title: 'Mobile App Development' },
        { image: image.digitalimage, title: 'Digital Marketing' },
        { image: image.androidImage, title: 'Android App Development' },
        { image: image.webhosting, title: 'Web hosting' },
        { image: image.typingImage, title: 'Online Typing work' }

    ]
    const data2 = [
        { image: ajay, fullName: 'Ajay Batham', desination:'Front End Developer'  },
        { image: atul, fullName: 'Atul Tiwari', desination:'React Native Developer' },
        { image: ashu, fullName: 'Ashutosh Dixit', desination:'Scala Developer' },
        { image: abdul, fullName: 'Abdul Bari', desination:'Java Developer' },
        { image: rohindra, fullName: 'Rohindra Yadav', desination:'Angular Developer' },
        { image: vivek, fullName: 'Vivek Sharma', desination:'PHP Developer' }
       
       
      ]

    return (
        <>
            <Common title="Grow your Business with"
                image={homeimage}
                btnName={"Get Started"}
                visit={"/"}
            />
  
            <div className="container-fluid">
                <div className="row" >
                    <div className="col-10 mx-auto" style={{borderTop:'2px solid #ffffff'}}>
                        <div className="row my-3">
                            <section>
                                <div  data-aos="fade-up" className="my-3">
                                    <h1 className="text-center" style={{color:'#F1F3F4'}}><u>Our Services</u></h1>
                                </div>
                                <div className="row">
                                    <div className="col-10 mx-auto " >
                                        <div data-aos="fade-right" className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 g-4">
                                            {
                                                data.map((val, index) => {
                                                    return <ServiceCard
                                                        image={val.image}
                                                        title={val.title} />
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                         
                        <div className="row my-3" style={{borderTop:'2px solid #ffffff'}}>
                            <section>
                                <div data-aos="fade-down"  className="my-3">
                                    <h1 className="text-center" style={{color:'#F1F3F4'}}><u>About Us</u></h1>
                                </div>
                                <div className="row">
                                    <div className="col-10 mx-auto">
                                        <div data-aos="flip-left" className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 g-4">
                                            {
                                                data2.map((val, index) => {
                                                    return <ServiceCard
                                                        image={val.image}
                                                        title={val.fullName}
                                                        desination={val.desination} />
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        
                        <div className="row my-3" style={{borderTop:'2px solid #ffffff'}}>
                            <section>
                                <div data-aos="zoom-in" className="my-3">
                                    <h1 className="text-center" style={{color:'#F1F3F4'}}><u>Contact Us</u></h1>
                                </div>
                                <div data-aos="zoom-out" className="container-fluid">
                                <ContactUs/>
                                </div>
                            </section>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
