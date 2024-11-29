import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';
import "./sign.css";
import {BarraNavegacionPrincipal} from "../../routers/index";

function ComponenteSignUp() {
    //constantes para almacenar la data que trae la api para creacion de usuarios
    const [dni, setDni] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    //constante de navegacion
    const navigate = useNavigate();

    function limpiarCampos () {
        setDni("");
        setNombre("");
        setApellido("");
        setCelular("");
        setCorreo("");
        setContraseña("");
    }

    const crearCuenta = async () => {
        if (!dni || !nombre || !apellido || !celular || !correo || !contraseña) {
            alert("Por favor, completa todos los campos.");
            return;
        }
        axios.post("http://localhost:3000/addUser", {
            DNI: dni,
            Nombre: nombre,
            Apellido: apellido,
            Celular: celular,
            Correo: correo,
            Contraseña: contraseña
        }).then(() => {
            Swal.fire({
                title: '¡Enhorabuena!',
                text: '¡Usuario registrado con éxito!',
                icon: 'success',
            });
            limpiarCampos();
            navigate("/login")
        }).catch((error) => {
            console.log(error)
        })
    };

    return (
        <>
            <BarraNavegacionPrincipal />
            <section className="container-fluid contenedorSign">
                <div className="row">
                    <div className="col-12 col-md-6 mb-3 primera">
                        <h1>Crear Cuenta</h1>
                        <div className="mb-3">
                            <label htmlFor="dni" className="form-label"> <strong> DNI: </strong> </label>
                            <input value={dni} onChange={(e) => setDni(e.target.value)} type="text" className="form-control" id="dni" required placeholder='DNI'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label"> <strong> Nombre: </strong> </label>
                            <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" id="nombre" required placeholder='Nombre'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="apellido" className="form-label"> <strong> Apellido: </strong> </label>
                            <input value={apellido} onChange={(e) => setApellido(e.target.value)} type="text" className="form-control" id="apellido" required placeholder='Apellido'/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-3 segunda">
                        <div className="mb-4">
                            <label htmlFor="celular" className="form-label"> <strong> Celular: </strong> </label>
                            <input value={celular} onChange={(e) => setCelular(e.target.value)} type="text" className="form-control" id="celular" required placeholder='Celular'/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label"> <strong> Correo: </strong> </label>
                            <input value={correo} onChange={(e) => setCorreo(e.target.value)} type="email" className="form-control" id="email" required placeholder='Correo Electrónico'/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label"> <strong> Contraseña: </strong> </label>
                            <input value={contraseña} onChange={(e) => setContraseña(e.target.value)} type="password" className="form-control" id="password" required placeholder='Contraseña'/>
                        </div>
                        <button className="btn btn-danger w-100" type="button" onClick={crearCuenta}>Crear Cuenta</button>
                    </div>
                </div>
            </section>
        </>
    )
}


export default ComponenteSignUp;
