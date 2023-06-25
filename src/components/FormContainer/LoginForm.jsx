import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../styles/Global.styles.css"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../contents/UserSlice';
import {toast} from "react-toastify"

const  LoginForm = () => {
    const dispatch = useDispatch()

    const defaultFormField = {
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(defaultFormField)
    const {email, password} = formData;

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(loginUser(formData))
        setFormData({
            email: "",
            password: ""
        })
        toast.success("Login SuccessFul", {
            position: "bottom-left"
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center font-bold'>Login</h2>
       <Form className='form-container' onSubmit={handleSubmit}> 
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
            <Button className="btn btn-success" type="submit">
                Submit
            </Button>
        </Form> 
    </div>
    
  );
}

export default LoginForm;