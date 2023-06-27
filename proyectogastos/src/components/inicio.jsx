import React, { useState, useContext } from 'react';
import { ContextApp } from '../../Context/context';
import db from '../../firebase/firebase'; // Importa la instancia de Firestore que has creado

function IniciarSesion() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(ContextApp);

    async function handleSignIn(e) {
        e.preventDefault();
        try {
            // Realizar una consulta a Firestore para obtener el documento correspondiente al correo electrónico
            const querySnapshot = await db.collection("usuarios")
                .where('email', '==', email)
                .where('password', '==', password)
                .get();

            // Verificar si se encontró un documento con el correo electrónico y la contraseña proporcionados
            if (querySnapshot.size === 1) {
                // Obtener los datos del documento encontrado
                const user = querySnapshot.docs[0].data();
                // Establecer el usuario en el contexto
                setUser(user);
                // Limpiar los campos de entrada
                setEmail('');
                setPassword('');
            } else {
                console.log('Credenciales incorrectas');
                // Manejar el caso en el que las credenciales sean incorrectas (mostrar mensaje de error, etc.)
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            // Manejar cualquier otro error que pueda ocurrir
        }
    }

    return (
        <div>
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSignIn}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
}

export default IniciarSesion;
