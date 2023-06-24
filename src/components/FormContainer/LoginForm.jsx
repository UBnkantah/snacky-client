import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../styles/Global.styles.css"

const  LoginForm = () => {
  return (
    <div className='container'>
        <h2 className='text-center font-bold'>Login</h2>
       <Form className='form-container'> 
            <Form.Group className="form-item">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="form-item">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="btn btn-success" type="submit">
                Submit
            </Button>
        </Form> 
    </div>
    
  );
}

export default LoginForm;