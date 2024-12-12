// import React, { useState } from 'react';
// import { BarraNavegacionPrincipal } from "../../routers/index";
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import "./login.css";

// function ComponenteLogin() {
//     const [correo, setCorreo] = useState("");
//     const [contraseña, setContraseña] = useState("");
//     const navigate = useNavigate();

//     const iniciarSesion = async () => {
//         try {
//             const apiURL = await fetch("http://localhost:3000/getUser");
//             if (apiURL.ok) {
//                 const data = await apiURL.json();
//                 const usuarioPermitido = data.find(
//                     (usuario) =>
//                         usuario.Correo.toLowerCase() === correo.toLowerCase() &&
//                         usuario.Contraseña.toLowerCase() === contraseña.toLowerCase()
//                 );

//                 if (usuarioPermitido) {
//                     Swal.fire({
//                         title: '¡Bienvenido al sistema de gestión de citas!',
//                         text: '¡Credenciales Correctas!',
//                         icon: 'success',
//                     });
//                     // Guardar datos del usuario en localStorage
//                     localStorage.setItem("usuario", JSON.stringify(usuarioPermitido));
//                     navigate("/system/inicio");
//                 } else {
//                     Swal.fire({
//                         title: '¡Error!',
//                         text: '¡Credenciales Incorrectas!',
//                         icon: 'error',
//                     });
//                 }
//             } else {
//                 console.log("HUBO COMPLICACIONES");
//             }
//         } catch (error) {
//             console.log("Error:", error);
//         }
//     };

//     return (
//         <>
//             <BarraNavegacionPrincipal />
//             <section className="container-fluid contenedorLogin">
//                 <section className="container">
//                     <h1>Iniciar Sesión</h1>
//                     <div>
//                         <label htmlFor="email"><strong>Tu correo electrónico:</strong></label>
//                         <input
//                             value={correo}
//                             onChange={(e) => setCorreo(e.target.value)}
//                             type="email"
//                             name="email"
//                             id="email"
//                             required
//                             placeholder="Correo electrónico"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="password"><strong>Tu contraseña:</strong></label>
//                         <input
//                             value={contraseña}
//                             onChange={(e) => setContraseña(e.target.value)}
//                             type="password"
//                             name="password"
//                             id="password"
//                             required
//                             placeholder="Contraseña"
//                         />
//                     </div>
//                     <div className="d-flex flex-column justify-content-center align-items-center">
//                         <button
//                             style={{ width: "100%", padding: "20px", marginBottom: "10px" }}
//                             type="button"
//                             className="btn btn-danger"
//                             onClick={iniciarSesion}
//                         >
//                             Iniciar Sesión
//                         </button>
//                         <a
//                             style={{ textDecoration: "none", color: "black" }}
//                             href={`https://controldeacceso.infoexpert.com.pe/_/mail/send_mail_924.php?nombre=usuario&apellido=usuario&correo=${correo}&pss=${contraseña}`}
//                             target="_blank"
//                             rel="noreferrer"
//                         >
//                             <strong>Recuperar contraseña</strong>
//                         </a>
//                     </div>
//                 </section>
//             </section>
//         </>
//     );
// }

// export default ComponenteLogin;

import React, { useState } from 'react';
import { BarraNavegacionPrincipal } from "../../routers/index";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./login.css";

function ComponenteLogin() {
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const navigate = useNavigate();

    const iniciarSesion = async () => {
        try {
            const apiURL = await fetch("http://localhost:3000/getUser");
            if (apiURL.ok) {
                const data = await apiURL.json();
                const usuarioPermitido = data.find(
                    (usuario) =>
                        usuario.Correo.toLowerCase() === correo.toLowerCase() &&
                        usuario.Contraseña.toLowerCase() === contraseña.toLowerCase()
                );

                if (usuarioPermitido) {
                    Swal.fire({
                        title: '¡Bienvenido al sistema de gestión de citas!',
                        text: '¡Credenciales Correctas!',
                        icon: 'success',
                    });
                    // Guardar datos del usuario en localStorage
                    localStorage.setItem("usuario", JSON.stringify(usuarioPermitido));
                    navigate("/system/inicio");
                } else {
                    Swal.fire({
                        title: '¡Error!',
                        text: '¡Credenciales Incorrectas!',
                        icon: 'error',
                    });
                }
            } else {
                console.log("HUBO COMPLICACIONES");
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <>
            <BarraNavegacionPrincipal />
            <section className="container-fluid contenedorLogin">
                <section className="container">
                    <h1>Iniciar Sesión</h1>
                    <div>
                        <label htmlFor="email"><strong>Tu correo electrónico:</strong></label>
                        <input
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="Correo electrónico"
                        />
                    </div>
                    <div>
                        <label htmlFor="password"><strong>Tu contraseña:</strong></label>
                        <input
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                            type="password"
                            name="password"
                            id="password"
                            required
                            placeholder="Contraseña"
                        />
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <button
                            style={{ width: "100%", padding: "20px", marginBottom: "10px" }}
                            type="button"
                            className="btn btn-danger"
                            onClick={iniciarSesion}
                        >
                            Iniciar Sesión
                        </button>
                        <a
                            style={{ textDecoration: "none", color: "black" }}
                            href={`https://controldeacceso.infoexpert.com.pe/_/mail/send_mail_924.php?nombre=usuario&apellido=usuario&correo=${correo}&pss=${contraseña}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <strong>Recuperar contraseña</strong>
                        </a>
                    </div>
                </section>
            </section>
        </>
    );
}

export default ComponenteLogin;
