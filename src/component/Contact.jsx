import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Common from '../Demo/Common';
import contact from '../assets/images/contact.jpg'
import ContactUs from '../Demo/ContactUs';
 const  Contact=()=> {

    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    })
    return (
        <>
            <Common
                title="Welcome to Contact"
                image={contact}
                btnName={'Contact'}
            />
            <div data-aos="fade-down" className="my-3">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div data-aos="fade-right" className="container-fluid">
               <ContactUs/>
            </div>
        </>

    )
}
export default Contact;