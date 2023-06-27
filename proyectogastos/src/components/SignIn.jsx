import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext"

function CrearCuenta() {
    const { signUp } = useContext(AuthContext);
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
            await signUp(user.email, user.password);
            navigate('/')
        }
        catch (error) {
            if (error.code == "auth/email-already-in-use") {
                alert("Correo actualmente en uso")
            }
            if (error.code == "auth/invalid-email") {
                alert("correo invalido")
            }
            if(error.code == "auth/weak-password"){
                alert("La contrase;a es demasiado corta, recuerda que deben ser al menos 6(seis) caracteres")
            }
            console.log(error.code)
        }
    }

    return (
        <div>
            <h2>Crear User</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    name='email'
                    placeholder='youremail@gmail.com'
                    onChange={handleChange}
                />
                <label>Password:</label>
                <input
                    type="password"
                    name='password'
                    placeholder='password'
                    onChange={handleChange}
                    required
                />
                <button type="submit">Crear usuario</button>
            </form>
            <button onClick={() => { navigate("/Login") }}>Iniciar Sesion</button>
        </div>
    );
}

export default CrearCuenta;
