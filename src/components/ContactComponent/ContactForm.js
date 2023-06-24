import React, { useState } from 'react'

const ContactForm = () => {
    const defaultFormField = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }

    const [formFields, setFormFields] = useState(defaultFormField);
    const {name, email, phone, message} = formFields

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div>
      <div>
        <h2>Get In Touch</h2>
        <p>
          At Sleeky we are dedicated plant-based living and becoming a better
          brand, which is why we would love to hear your feedback - no matter
          how big or small
        </p>
        <form>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Place Enter your Full Name"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            name="email"
            onChange={handleChange}
          />
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            name="phone"
            onChange={handleChange}
          />
          <label>Speacial Information</label>
          <textarea>
            
          </textarea>
        </form>
      </div>
      <div></div>
    </div>
  );
}

export default ContactForm
