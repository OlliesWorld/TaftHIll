import React, { useState } from "react"
import { navigate } from 'gatsby'
import '../assets/sass/newForm.css'

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const NewContactForm = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
    setEmail({ ...email, [e.target.email]: e.target.value })
    setMessage({ ...message, [e.target.message]: e.target.value })
  }

  const handleSubmit = (event) => {
    // Prevent the default onSubmit behavior
    event.preventDefault();
    // POST the encoded form with the content-type header that's required for a text submission
    // Note that the header will be different for POSTing a file
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": event.target.getAttribute("name"), 
        ...name
      })
    })
      // On success, redirect to the custom success page using Gatsby's `navigate` helper function
      .then(() => navigate("/thanks/"))
      // On error, show the error in an alert
      .catch(error => alert(error));
  };

  return (
    <div className="NForm">
    <form data-netlify="true" action="/" name="contactUs" method="post" onSubmit={handleSubmit}>
     <label htmlFor="nameInput" className="NForm--Title">Send us a Message</label>
      <input type="hidden" name="form-name" value="contact-form" />
     
        <input className='NForm--Input' name="Name" type="text" onChange={handleChange} required placeholder="Name"  />
        <input className='NForm--Input' type='email' placeholder='Email' name='email' onChange={handleChange} required />
        <textarea className='NForm--Input BForm--Textarea' placeholder='Message' name='message' rows='8' minlength="8" onChange={handleChange} required />
         
            
              <button className='NForm--SubmitButton' type='submit' >Contact Us</button>
            
         
        </form>
  
        </div>
    )
}
export default NewContactForm