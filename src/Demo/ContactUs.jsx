import React,{ useState } from 'react'

const ContactUs=()=> {
const [data, setData]=useState({
    fullname:'',
    phone:'',
    email:'',
    message:''
})

const InputEvent=(event)=>{
 const {name, value} = event.target
 setData((preval)=>{
     return {
        ...preval,
        [name] : value,
     }; 
     
 });
};
const formSubmit=(e)=>{
    e.preventDefault()
    alert(`My Full Name is ${data.fullname} and My phone number is ${data.phone} my Email is ${data.email} and my message is ${data.message}`)
    
}
    return (
        <>
         <div className="row parallex">
                </div>
                <form onSubmit={formSubmit}>
                <div className="col-md-6 col-10 mx-auto mt-3 mb-3">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                        <input type="text" 
                         name="fullname" className="form-control" 
                         id="exampleFormControlInput1" 
                         placeholder="Enter Full Name" 
                         value={data.fullname}
                         onChange={InputEvent}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                        <input type="phone" 
                         name="phone" className="form-control" 
                         id="exampleFormControlInput2" 
                         placeholder="Enter  phone" 
                         value={data.phone}
                         onChange={InputEvent}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" 
                         name="email" className="form-control" 
                         id="exampleFormControlInput3" 
                         placeholder="Enter email"
                         value={data.email}
                         onChange={InputEvent} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea  name="message" 
                        className="form-control" 
                        id="exampleFormControlTextarea4" 
                        placeholder="Enter Message" 
                        rows={3} defaultValue={""}
                        value={data.message}
                        onChange={InputEvent} />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-warning"  type="submit" style={{color:'#fff'}}>Submit form</button>
                    </div>
                    
                </div>
                </form>
        </>
    )
}

export default ContactUs
