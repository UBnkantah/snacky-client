import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../styles/Global.styles.css"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../contents/UserSlice';
import {toast} from "react-toastify"

const  RegisterForm = () => {
    const defaultFormData = {
        name: "",
        email: "",
        password: ""
    }
    const dispatch = useDispatch()
    const [formData, setFormData] = useState(defaultFormData)
    const {name, email, password} = formData;

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(registerUser(formData))
        setFormData({
            name: "",
            email: "",
            password: ""
        })
        // toast.success("Registered Successfully", {
        //     position: "bottom-left"
        // })
    }

  return (
    <div className='container'>
        <h2 className='text-center mt-3'>Register</h2>
        <Form className='form-container' onSubmit={handleSubmit}>
            <Form.Group className="form-item">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                    name="name"
                    value={name}
                    type="text" 
                    placeholder="Enter your Full Name"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="form-item">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="form-item">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button className='btn btn-success' type="submit">
                Submit
            </Button>
        </Form>
    </div>
    
  );
}

export default RegisterForm;