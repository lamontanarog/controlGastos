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
    const handleSubmit = (e) => {
        e.preventDefault();
        if(signUp){
            signUp(user.email, user.password)
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
            <button onClick={()=>{navigate("/Login")}}>Iniciar Sesion</button>
        </div>
    );
}

export default CrearCuenta;
