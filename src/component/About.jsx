import React, { useEffect } from 'react'
import Common from '../Demo/Common';
import Aos from 'aos';
import 'aos/dist/aos.css';
import profile from '../assets/images/team5.png';
import ServiceCard from '../Demo/ServiceCard';
import ajay from '../assets/images/ajay.jpg';
import ashu from '../assets/images/ashu.jpg';
import atul from '../assets/images/atul.jpg';
import rohindra from '../assets/images/rohindra.png';
import vivek from '../assets/images/vivek.jpg';
import abdul from '../assets/images/abdul.jpg';


const About=()=> {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  const data = [
    { image: ajay, fullName: 'Ajay Batham', desination:'Front End Developer'  },
    { image: atul, fullName: 'Atul Tiwari', desination:'React Native Developer' },
    { image: ashu, fullName: 'Ashutosh Dixit', desination:'Scala Developer' },
    { image: abdul, fullName: 'Abdul Bari', desination:'Java Developer' },
    { image: rohindra, fullName: 'Rohindra Yadav', desination:'Angular Developer' },
    { image: vivek, fullName: 'Vivek Sharma', desination:'PHP Developer' }
   
  ]
  return (
    <>
      <Common title="Welcome at About"
        image={profile}
        visit={"/contact"}
        btnName={"Contact"}
      />
      <div data-aos="fade-down" className="container-fluid">
        <div className="my-3">
          <h1 className="text-center">About Us</h1>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <div data-aos="zoom-in" className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 g-4">
              {data.map((val, index) => {
                return <ServiceCard
                  image={val.image}
                  title={val.fullName}
                  desination={val.desination}
                />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
