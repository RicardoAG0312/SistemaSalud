// import React, {useState} from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import {ComponenteBarraNavLateral} from "../systeminicio/ComponenteInicioSystem";
// import "./reservacita.css";
// import { useEffect } from 'react';
// import Swal from 'sweetalert2';

// function ComponenteReservaCita() {
//     const [dataDoctor, setDataDoctor] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [citaSeleccionada, setCitaSeleccionada] = useState(null);
//     const [usuario, setUsuario] = useState(null);
//     const [filtro, setFiltro] = useState("");

//     useEffect(() => {
//         const fetchDataDoctores = async () => {
//             try {
//                 const apiURL = await fetch("http://localhost:3000/getDoctores");
//                 if (apiURL.ok) {
//                     const data = await apiURL.json();
//                     setDataDoctor(data);
//                 } else {
//                     console.log("ERROR CON API")
//                 }
//             } catch (error) {
//                 console.log(`HUBO ERROR EN LA LLAMADA DE LA API DE DATA DOCTORES: ${error}`);
//             }
//         }
//         fetchDataDoctores();
//     }, [])

//     const horarios = [
//         { fecha: "24-07-2024", hora: "5:30 PM" },
//         { fecha: "25-07-2024", hora: "6:00 PM" },
//         { fecha: "26-07-2024", hora: "4:30 PM" },
//         { fecha: "27-07-2024", hora: "5:00 PM" },
//         { fecha: "28-07-2024", hora: "3:00 PM" },
//         { fecha: "29-07-2024", hora: "6:30 PM" },
//     ];

//     const handleShow = (doctor, horario) => {
//         setCitaSeleccionada({ doctor, horario });
//         setShowModal(true);
//     };

//     const handleClose = () => {
//         let citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];
//         const citaExistente = citasGuardadas.some(cita => cita.doctor === `${citaSeleccionada.doctor.Apellido}, ${citaSeleccionada.doctor.Nombre}`);

//         if (citaExistente) {
//             // Mostrar SweetAlert si ya tienes una cita con ese doctor
//             Swal.fire({
//                 title: '¡Ya tienes una cita con este doctor!',
//                 text: 'No puedes agendar una nueva cita con el mismo doctor.',
//                 icon: 'warning',
//                 confirmButtonText: 'Cerrar'
//             });
//         } else {
//             // Si no existe una cita con ese doctor, agregar la nueva cita
//             const cita = {
//                 especialidad: citaSeleccionada.doctor.Especialidad,
//                 fecha: `${citaSeleccionada.horario.fecha} / ${citaSeleccionada.horario.hora}`,
//                 doctor: `${citaSeleccionada.doctor.Apellido}, ${citaSeleccionada.doctor.Nombre}`
//             };
    
//             citasGuardadas.push(cita);
//             localStorage.setItem('citas', JSON.stringify(citasGuardadas));
    
//             // Mostrar SweetAlert de éxito
//             Swal.fire({
//                 title: '¡Cita agendada satisfactoriamente!',
//                 text: '¡Verifique sus citas!',
//                 icon: 'success',
//                 confirmButtonText: 'Cerrar'
//             });
//         }

//         setShowModal(false);
//     };

//     useEffect(() => {
//         const datosUsuario = JSON.parse(localStorage.getItem("usuario"));
//         setUsuario(datosUsuario);
//     }, []);

//     if (!usuario) {
//         return <p>Cargando datos del usuario...</p>;
//     }

//     const doctoresFiltrados = dataDoctor.filter(doc =>
//         doc.Especialidad.toLowerCase().includes(filtro.toLowerCase())
//     );

//     return (
//         <>
//             <section className="d-flex row">
//                 <div className="col-12 col-sm-12 system d-flex" style={{width: "100%"}}>
//                     <ComponenteBarraNavLateral />
//                     <section className="contenedorInfoReservaCita">
//                         <h1 className="text-center" style={{fontSize: "70px", padding: "30px 20px"}}> RESERVAR CITA </h1>
//                         <div style={{padding: "20px", marginBottom: "30px"}}  className='filterReserva container d-flex justify-content-evenly align-items-center'>
//                             <h2 className='m-0'> <strong> Búsqueda de especialidad: </strong> </h2>
//                             {/* Aqui debajo*/}
//                             <input type="search" name="search" id="search" placeholder='Buscar...' value={filtro} onChange={(e) => setFiltro(e.target.value)}/> 
//                         </div>
//                         <table className="table table-striped text-center">
//                             <thead>
//                                 <tr className="table-secondary">
//                                     <th style={{fontWeight: "bold", padding: "20px"}}> Especialidad </th>
//                                     <th style={{fontWeight: "bold", padding: "20px"}}> Fecha</th>
//                                     <th style={{fontWeight: "bold", padding: "20px"}}> Doctor </th>
//                                     <th style={{fontWeight: "bold", padding: "20px"}}> Función </th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {doctoresFiltrados.map((doc, index) => {
//                                     const horario = horarios[index % horarios.length]; // Si hay más doctores que horarios, reciclamos los horarios
//                                     return (
//                                         <tr key={index}>
//                                             <td>
//                                                 <p
//                                                     style={{
//                                                         background: "#0B5ED7",
//                                                         margin: "0px",
//                                                         color: "white",
//                                                         padding: "3px",
//                                                         borderRadius: "5px",
//                                                     }}
//                                                 >
//                                                     {doc.Especialidad}
//                                                 </p>
//                                             </td>
//                                             <td>{`${horario.fecha} / ${horario.hora}`}</td>
//                                             <td>{`${doc.Apellido}, ${doc.Nombre}`}</td>
//                                             <td>
//                                                 <p
//                                                     style={{
//                                                         background: "#03A652",
//                                                         margin: "0px",
//                                                         color: "white",
//                                                         padding: "3px",
//                                                         borderRadius: "5px",
//                                                         cursor: "pointer",
//                                                     }}
//                                                     onClick={() => handleShow(doc, horario)}
//                                                 >
//                                                     Reservar
//                                                 </p>
//                                             </td>
//                                         </tr>
//                                     );
//                                 })}
//                             </tbody>
//                         </table>
//                     </section>  
//                 </div>
//             </section>
//             <Modal
//                 show={showModal}
//                 onHide={handleClose}
//                 backdrop="static"
//                 keyboard={false}
//             >
//                 <Modal.Header>
//                     <p>
//                         Comprobante de cita médica
//                     </p>
//                 </Modal.Header>
//                 {/* <Modal.Body>
//                     <div className="primero">
//                         <p style={{width: "100%", fontWeight: "700", fontSize: "18px"}}> Información el paciente: </p>
//                         <div style={{width: "100%", fontWeight: "700"}} className="d-flex">
//                             <p style={{marginRight: "5px"}}> <strong> Nombre: </strong> </p> <p>  <strong> Leon Castilla, Carlos </strong> </p>
//                         </div>
//                         <div style={{width: "100%", fontWeight: "700"}} className="d-flex">
//                             <p style={{marginRight: "5px"}}> <strong> DNI: </strong> </p> <p>  <strong> 04553325 </strong> </p>
//                         </div>
//                     </div>
//                     <div className="segundo">
//                         <p style={{width: "100%", fontWeight: "700", fontSize: "18px"}}> Información de la cita: </p>
//                         <div style={{width: "100%", fontWeight: "700"}} className="d-flex">
//                             <p style={{marginRight: "5px"}}> <strong> Médico: </strong> </p> <p>  <strong> Leon Castilla, Carlos </strong> </p>
//                         </div>
//                         <div style={{width: "100%", fontWeight: "700"}} className="d-flex">
//                             <p style={{marginRight: "5px"}}> <strong> Procedimiento: </strong> </p> <p>  <strong> Consulta Médica </strong> </p>
//                         </div>
//                         <div style={{width: "100%", fontWeight: "700"}} className="d-flex">
//                             <p style={{marginRight: "5px"}}> <strong> Fecha: </strong> </p> <p>  <strong> 24 - 07 - 2024 / 5:30 PM </strong> </p>
//                         </div>
//                         <div style={{width: "100%", fontWeight: "700"}} className="d-flex">
//                             <p style={{marginRight: "5px"}}> <strong> Lugar: </strong> </p> <p>  <strong> Fundo Izurra Mz 35 - San Isidro </strong> </p>
//                         </div>
//                     </div>
//                 </Modal.Body> */}
//                 <Modal.Body>
//                     {citaSeleccionada && (
//                         <>
//                             <div className="primero">
//                                 <p
//                                     style={{
//                                         width: "100%",
//                                         fontWeight: "700",
//                                         fontSize: "18px",
//                                     }}
//                                 >
//                                     Información del paciente:
//                                 </p>
//                                 <div
//                                     style={{
//                                         width: "100%",
//                                         fontWeight: "700",
//                                     }}
//                                     className="d-flex"
//                                 >
//                                     <p style={{ marginRight: "5px" }}>
//                                         <strong>Nombre:</strong>
//                                     </p>
//                                     <p>
//                                         <strong> {usuario.Nombre} </strong>
//                                     </p>
//                                 </div>
//                                 <div
//                                     style={{
//                                         width: "100%",
//                                         fontWeight: "700",
//                                     }}
//                                     className="d-flex"
//                                 >
//                                     <p style={{ marginRight: "5px" }}>
//                                         <strong>DNI:</strong>
//                                     </p>
//                                     <p>
//                                         <strong> {usuario.DNI} </strong>
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="segundo">
//                                 <p
//                                     style={{
//                                         width: "100%",
//                                         fontWeight: "700",
//                                         fontSize: "18px",
//                                     }}
//                                 >
//                                     Información de la cita:
//                                 </p>
//                                 <div
//                                     style={{
//                                         width: "100%",
//                                         fontWeight: "700",
//                                     }}
//                                     className="d-flex"
//                                 >
//                                     <p style={{ marginRight: "5px" }}>
//                                         <strong>Médico:</strong>
//                                     </p>
//                                     <p>
//                                         <strong>{`${citaSeleccionada.doctor.Apellido}, ${citaSeleccionada.doctor.Nombre}`}</strong>
//                                     </p>
//                                 </div>
//                                 <div
//                                     style={{
//                                         width: "100%",
//                                         fontWeight: "700",
//                                     }}
//                                     className="d-flex"
//                                 >
//                                     <p style={{ marginRight: "5px" }}>
//                                         <strong>Procedimiento:</strong>
//                                     </p>
//                                     <p>
//                                         <strong>Consulta Médica</strong>
//                                     </p>
//                                 </div>
//                                 <div
//                                     style={{
//                                         width: "100%",
//                                         fontWeight: "700",
//                                     }}
//                                     className="d-flex"
//                                 >
//                                     <p style={{ marginRight: "5px" }}>
//                                         <strong>Fecha:</strong>
//                                     </p>
//                                     <p>
//                                         <strong>{`${citaSeleccionada.horario.fecha} / ${citaSeleccionada.horario.hora}`}</strong>
//                                     </p>
//                                 </div>
//                                 <div
//                                     style={{
//                                         width: "100%",
//                                         fontWeight: "700",
//                                     }}
//                                     className="d-flex"
//                                 >
//                                     <p style={{ marginRight: "5px" }}>
//                                         <strong>Lugar:</strong>
//                                     </p>
//                                     <p>
//                                         <strong>Fundo Izurra Mz 35 - San Isidro</strong>
//                                     </p>
//                                 </div>
//                             </div>
//                         </>
//                     )}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Aceptar
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )
// }

// export default ComponenteReservaCita

import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ComponenteBarraNavLateral } from "../systeminicio/ComponenteInicioSystem";
import "./reservacita.css";
import Swal from 'sweetalert2';

function ComponenteReservaCita() {
    const [dataDoctor, setDataDoctor] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [citaSeleccionada, setCitaSeleccionada] = useState(null);
    const [usuario, setUsuario] = useState(null);
    const [filtro, setFiltro] = useState("");

    useEffect(() => {
        const fetchDataDoctores = async () => {
            try {
                const apiURL = await fetch("http://localhost:3000/getDoctores");
                if (apiURL.ok) {
                    const data = await apiURL.json();
                    setDataDoctor(data);
                } else {
                    console.log("ERROR CON API")
                }
            } catch (error) {
                console.log(`HUBO ERROR EN LA LLAMADA DE LA API DE DATA DOCTORES: ${error}`);
            }
        }
        fetchDataDoctores();
    }, []);

    const horarios = [
        { fecha: "24-07-2024", hora: "5:30 PM" },
        { fecha: "25-07-2024", hora: "6:00 PM" },
        { fecha: "26-07-2024", hora: "4:30 PM" },
        { fecha: "27-07-2024", hora: "5:00 PM" },
        { fecha: "28-07-2024", hora: "3:00 PM" },
        { fecha: "29-07-2024", hora: "6:30 PM" },
    ];

    const handleShow = (doctor, horario) => {
        setCitaSeleccionada({ doctor, horario });
        setShowModal(true);
    };

    const handleClose = () => {
        let citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];
        const citaExistente = citasGuardadas.some(cita => cita.doctor === `${citaSeleccionada.doctor.Apellido}, ${citaSeleccionada.doctor.Nombre}`);

        if (citaExistente) {
            Swal.fire({
                title: '¡Ya tienes una cita con este doctor!',
                text: 'No puedes agendar una nueva cita con el mismo doctor.',
                icon: 'warning',
                confirmButtonText: 'Cerrar'
            });
        } else {
            const cita = {
                especialidad: citaSeleccionada.doctor.Especialidad,
                fecha: `${citaSeleccionada.horario.fecha} / ${citaSeleccionada.horario.hora}`,
                doctor: `${citaSeleccionada.doctor.Apellido}, ${citaSeleccionada.doctor.Nombre}`
            };
            citasGuardadas.push(cita);
            localStorage.setItem('citas', JSON.stringify(citasGuardadas));

            Swal.fire({
                title: '¡Cita agendada satisfactoriamente!',
                text: '¡Verifique sus citas!',
                icon: 'success',
                confirmButtonText: 'Cerrar'
            });
        }
        setShowModal(false);
    };

    useEffect(() => {
        const datosUsuario = JSON.parse(localStorage.getItem("usuario"));
        setUsuario(datosUsuario);
    }, []);

    if (!usuario) {
        return <p>Cargando datos del usuario...</p>;
    }

    const doctoresFiltrados = dataDoctor.filter(doc =>
        doc.Especialidad.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <>
            <section className="d-flex row">
                <div className="col-12 col-sm-12 system d-flex" style={{ width: "100%" }}>
                    <ComponenteBarraNavLateral />
                    <section className="contenedorInfoReservaCita">
                        <h1 className="text-center" style={{ fontSize: "70px", padding: "30px 20px" }}> RESERVAR CITA </h1>
                        <div style={{ padding: "20px", marginBottom: "30px" }} className='filterReserva container d-flex justify-content-evenly align-items-center'>
                            <h2 className='m-0'> <strong> Búsqueda de especialidad: </strong> </h2>
                            <input type="search" name="search" id="search" placeholder='Buscar...' value={filtro} onChange={(e) => setFiltro(e.target.value)} />
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped text-center">
                                <thead>
                                    <tr className="table-secondary">
                                        <th style={{ fontWeight: "bold", padding: "20px" }}> Especialidad </th>
                                        <th style={{ fontWeight: "bold", padding: "20px" }}> Fecha</th>
                                        <th style={{ fontWeight: "bold", padding: "20px" }}> Doctor </th>
                                        <th style={{ fontWeight: "bold", padding: "20px" }}> Función </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {doctoresFiltrados.map((doc, index) => {
                                        const horario = horarios[index % horarios.length]; // Si hay más doctores que horarios, reciclamos los horarios
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <p
                                                        style={{
                                                            background: "#0B5ED7",
                                                            margin: "0px",
                                                            color: "white",
                                                            padding: "3px",
                                                            borderRadius: "5px",
                                                        }}
                                                    >
                                                        {doc.Especialidad}
                                                    </p>
                                                </td>
                                                <td>{`${horario.fecha} / ${horario.hora}`}</td>
                                                <td>{`${doc.Apellido}, ${doc.Nombre}`}</td>
                                                <td>
                                                    <p
                                                        style={{
                                                            background: "#03A652",
                                                            margin: "0px",
                                                            color: "white",
                                                            padding: "3px",
                                                            borderRadius: "5px",
                                                            cursor: "pointer",
                                                        }}
                                                        onClick={() => handleShow(doc, horario)}
                                                    >
                                                        Reservar
                                                    </p>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </section>
            <Modal
                show={showModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header>
                    <p>Comprobante de cita médica</p>
                </Modal.Header>
                <Modal.Body>
                    {citaSeleccionada && (
                        <>
                            <div className="primero">
                                <p style={{ width: "100%", fontWeight: "700", fontSize: "18px" }}> Información del paciente:</p>
                                <div className="d-flex" style={{ width: "100%", fontWeight: "700" }}>
                                    <p style={{ marginRight: "5px" }}><strong>Nombre:</strong></p>
                                    <p><strong>{usuario.Nombre}</strong></p>
                                </div>
                                <div className="d-flex" style={{ width: "100%", fontWeight: "700" }}>
                                    <p style={{ marginRight: "5px" }}><strong>DNI:</strong></p>
                                    <p><strong>{usuario.DNI}</strong></p>
                                </div>
                            </div>
                            <div className="segundo">
                                <p style={{ width: "100%", fontWeight: "700", fontSize: "18px" }}> Información de la cita:</p>
                                <div className="d-flex" style={{ width: "100%", fontWeight: "700" }}>
                                    <p style={{ marginRight: "5px" }}><strong>Médico:</strong></p>
                                    <p><strong>{`${citaSeleccionada.doctor.Apellido}, ${citaSeleccionada.doctor.Nombre}`}</strong></p>
                                </div>
                                <div className="d-flex" style={{ width: "100%", fontWeight: "700" }}>
                                    <p style={{ marginRight: "5px" }}><strong>Procedimiento:</strong></p>
                                    <p><strong>Consulta Médica</strong></p>
                                </div>
                                <div className="d-flex" style={{ width: "100%", fontWeight: "700" }}>
                                    <p style={{ marginRight: "5px" }}><strong>Fecha:</strong></p>
                                    <p><strong>{`${citaSeleccionada.horario.fecha} / ${citaSeleccionada.horario.hora}`}</strong></p>
                                </div>
                                <div className="d-flex" style={{ width: "100%", fontWeight: "700" }}>
                                    <p style={{ marginRight: "5px" }}><strong>Lugar:</strong></p>
                                    <p><strong>Fundo Izurra Mz 35 - San Isidro</strong></p>
                                </div>
                            </div>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ComponenteReservaCita;

