import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ComponenteBarraNavLateral} from "../systeminicio/ComponenteInicioSystem";
import "./reservacita.css";


function ComponenteReservaCita() {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <section className="d-flex row">
                <div className="col-12 col-sm-12 system d-flex" style={{width: "100%"}}>
                    <ComponenteBarraNavLateral />
                    <section className="contenedorInfoReservaCita">
                        <h1 className="text-center" style={{fontSize: "70px", padding: "30px 20px"}}> RESERVAR CITA </h1>
                        <div style={{padding: "20px", marginBottom: "30px"}}  className='filterReserva container d-flex justify-content-evenly align-items-center'>
                            <h2 className='m-0'> <strong> Búsqueda de especialidad: </strong> </h2>
                            <input type="search" name="search" id="search" placeholder='Buscar...'/>
                        </div>
                        <table className="table table-striped text-center">
                            <thead>
                                <tr className="table-secondary">
                                    <th style={{fontWeight: "bold", padding: "20px"}}> Especialidad </th>
                                    <th style={{fontWeight: "bold", padding: "20px"}}> Fecha</th>
                                    <th style={{fontWeight: "bold", padding: "20px"}}> Doctor </th>
                                    <th style={{fontWeight: "bold", padding: "20px"}}> Función </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> <p style={{background: "#0B5ED7", margin: "0px", color: "white", padding: "3px", borderRadius: "5px"}}> Odontologia </p> </td>
                                    <td> 24 - 07 - 2024 / 5:30 PM </td>
                                    <td> Leon Castillo, Carlos </td>
                                    <td> <p style={{background: "#03A652", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={handleShow}> Reservar </p> </td>
                                </tr>
                                <tr>
                                    <td> <p style={{background: "#0B5ED7", margin: "0px", color: "white", padding: "3px", borderRadius: "5px"}}> Cardiología </p> </td>
                                    <td> 24 - 07 - 2024 / 5:30 PM </td>
                                    <td> Leon Castillo, Carlos </td>
                                    <td> <p style={{background: "#03A652", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={handleShow}> Reservar </p> </td>
                                </tr>
                                <tr>
                                    <td> <p style={{background: "#0B5ED7", margin: "0px", color: "white", padding: "3px", borderRadius: "5px"}}> Ginecología </p> </td>
                                    <td> 24 - 07 - 2024 / 5:30 PM </td>
                                    <td> Leon Castillo, Carlos </td>
                                    <td> <p style={{background: "#03A652", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={handleShow}> Reservar </p> </td>
                                </tr>
                                <tr>
                                    <td> <p style={{background: "#0B5ED7", margin: "0px", color: "white", padding: "3px", borderRadius: "5px"}}> Dermatología </p> </td>
                                    <td> 24 - 07 - 2024 / 5:30 PM </td>
                                    <td> Leon Castillo, Carlos </td>
                                    <td> <p style={{background: "#03A652", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={handleShow}> Reversar </p> </td>
                                </tr>
                                <tr>
                                    <td> <p style={{background: "#0B5ED7", margin: "0px", color: "white", padding: "3px", borderRadius: "5px"}}> Pediatría </p> </td>
                                    <td> 24 - 07 - 2024 / 5:30 PM </td>
                                    <td> Leon Castillo, Carlos </td>
                                    <td> <p style={{background: "#03A652", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={handleShow}> Reservar </p> </td>
                                </tr>
                                <tr>
                                    <td> <p style={{background: "#0B5ED7", margin: "0px", color: "white", padding: "3px", borderRadius: "5px"}}> Neurología </p> </td>
                                    <td> 24 - 07 - 2024 / 5:30 PM </td>
                                    <td> Leon Castillo, Carlos </td>
                                    <td> <p style={{background: "#03A652", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={handleShow}> Reservar </p> </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>  
                </div>
            </section>
            <Modal
                show={showModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <p>
                        Comprobante de cita médica
                    </p>
                </Modal.Header>
                <Modal.Body>
                    <div className="primero">
                        <p style={{width: "100%", fontWeight: "700", fontSize: "18px"}}> Información el paciente: </p>
                        <div style={{width: "100%", fontWeight: "700"}} className="d-flex">
                            <p style={{marginRight: "5px"}}> <strong> Nombre: </strong> </p> <p>  <strong> Leon Castilla, Carlos </strong> </p>
                        </div>
                        <div style={{width: "100%", fontWeight: "700"}} className="d-flex">
                            <p style={{marginRight: "5px"}}> <strong> DNI: </strong> </p> <p>  <strong> 04553325 </strong> </p>
                        </div>
                    </div>
                    <div className="segundo">
                        <p style={{width: "100%", fontWeight: "700", fontSize: "18px"}}> Información de la cita: </p>
                        <div style={{width: "100%", fontWeight: "700"}} className="d-flex">
                            <p style={{marginRight: "5px"}}> <strong> Médico: </strong> </p> <p>  <strong> Leon Castilla, Carlos </strong> </p>
                        </div>
                        <div style={{width: "100%", fontWeight: "700"}} className="d-flex">
                            <p style={{marginRight: "5px"}}> <strong> Procedimiento: </strong> </p> <p>  <strong> Consulta Médica </strong> </p>
                        </div>
                        <div style={{width: "100%", fontWeight: "700"}} className="d-flex">
                            <p style={{marginRight: "5px"}}> <strong> Fecha: </strong> </p> <p>  <strong> 24 - 07 - 2024 / 5:30 PM </strong> </p>
                        </div>
                        <div style={{width: "100%", fontWeight: "700"}} className="d-flex">
                            <p style={{marginRight: "5px"}}> <strong> Lugar: </strong> </p> <p>  <strong> Fundo Izurra Mz 35 - San Isidro </strong> </p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ComponenteReservaCita
