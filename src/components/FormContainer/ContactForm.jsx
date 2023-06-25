import {Form, Button} from "react-bootstrap"
import { useState } from "react";
import {toast} from "react-toastify"

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

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            console.log(formFields)
            setFormFields({
                name: "",
                email: "",
                phone: "",
                message: ""
            })
            toast.success("Thank you for Contacting Us, We will get back to you Shortly", {
                position: "bottom-left"
            })
        }catch(err){
            toast.error(err)
        }
        
    }
  return (
    <div className="container">
        <h2 className='text-center font-bold'>Login</h2>
       <Form className='form-container' onSubmit={handleSubmit}> 
            <Form.Group className="form-item">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter Your Full Name" 
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group className="form-item">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter Your Email Address" 
                    name="email"
                    value={email}    
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group className="form-item">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                    name="phone"
                    value={phone}
                    type="text" 
                    placeholder="Enter Your Phone Number" 
                    onChange={handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control name="message" value={message} onChange={handleChange} as="textarea" rows={5} required/>
            </Form.Group>
            <Button className="btn btn-success" type="submit">
                Submit
            </Button>
        </Form> 
    </div>
  )
}

export default ContactForm