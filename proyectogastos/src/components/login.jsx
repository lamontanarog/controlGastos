import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import "./styles.css"

function Login() {
    const { login } = useContext(AuthContext);
    // const { } = useContext(ContextApp);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(user.email, user.password);
            navigate('/home')
        }
        catch (error) {
            if (error.code == "auth/user-not-found") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El correo no coincide con ninguno en nuestra base de datos.'
                });
            }
            if (error.code == "auth/invalid-email") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Correo invalido.'
                });
            }
            if (error.code == "auth/weak-password") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'La contrase;a es demasiado corta, recuerda que deben ser al menos 6(seis) caracteres.'
                });
            }
            if (error.code == "auth/wrong-password") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'contrase;a incorrecta, intentalo de nuevo.'
                });
            }
            console.log(error.code)
        }
    }

    return (
        <div className='pruebaEstilo'>
            <Form  onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" onChange={handleChange} />
                </Form.Group>
                <Button className='btnInicio' variant="primary" type="submit">
                    iniciar sesion
                </Button>
                <Button className='btnInicio' variant="primary" type="submit" onClick={() =>{navigate('/CreateAcount')}}>
                    crear cuenta
                </Button>
            </Form>
        </div>
    );
}

export default Login;