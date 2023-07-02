import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import "./styles.css"


function CrearCuenta() {
    const { signUp } = useContext(AuthContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    // creamos una funcion handle change que va a traer los cambios en los imputs,la cual tiene como parametros
    // la destructuracion del objeto target, que trae los propiedades name(email, password) y el value que escribimos en el input
    // luego setea al usuario con un spritOperator y dependiendo el name va a llenar ese valor 
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(user.email, user.password);
            navigate('/home')
        }
        catch (error) {
            if (error.code == "auth/email-already-in-use") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Correo actualmente en uso.'
                });
            }
            if (error.code == "auth/invalid-email") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'correo invalido.'
                });
            }
            if (error.code == "auth/weak-password") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'La contraseña es demasiado corta, recuerda que deben ser al menos 6(seis) caracteres.'
                });
            }
            console.log(error.code)
        }
    }

    return (
        <div className='grillaUser'>
        <div className='column-picture-register'><h1 className='contenido-parallax-register'>Crea una cuenta gratis</h1></div>
        <div className='column-form'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Ingresa tu correo" onChange={handleChange} required />
                    <div className="texto-muteado-form">
                        Nunca compartiremos tu informacion con nadie.
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Ingresa tu contraseña" onChange={handleChange} required />
                </Form.Group>
                <div className='buttonsForm'>
                <Button className='btnInicio' variant="primary" type="button" onClick={() =>{navigate('/')}}>
                    Iniciar sesion
                </Button>
                <Button variant="primary" type="submit">
                    crear cuenta
                </Button>
                </div>
            </Form>
        </div>
        </div>
    );
}

export default CrearCuenta;
