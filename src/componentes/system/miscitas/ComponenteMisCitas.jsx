import React, { useState } from 'react';
import {ComponenteBarraNavLateral} from "../systeminicio/ComponenteInicioSystem";
import "./miscitas.css";

function eliminarCita () {
    alert("Funcion eliminar cita");
}

function ComponenteMisCitas() {
    return (
        <>
            <section className="d-flex row">
                <div className="col-12 col-sm-12 system d-flex" style={{width: "100%"}}>
                    <ComponenteBarraNavLateral />
                    <section className="contenedorInfoReservaCita contenedorInfoMisCitas">
                        <h1 className="text-center" style={{fontSize: "70px", padding: "30px 20px"}}> CITAS AGENDADAS </h1>
                        <div style={{padding: "20px", marginBottom: "30px"}}  className='filterReserva container d-flex justify-content-evenly align-items-center'>
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
                                    <td> <p style={{background: "#AA0000", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={eliminarCita}> Eliminar </p> </td>
                                </tr>
                                <tr>
                                    <td> <p style={{background: "#0B5ED7", margin: "0px", color: "white", padding: "3px", borderRadius: "5px"}}> Cardiología </p> </td>
                                    <td> 24 - 07 - 2024 / 5:30 PM </td>
                                    <td> Leon Castillo, Carlos </td>
                                    <td> <p style={{background: "#AA0000", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={eliminarCita}> Eliminar </p> </td>
                                </tr>
                                <tr>
                                    <td> <p style={{background: "#0B5ED7", margin: "0px", color: "white", padding: "3px", borderRadius: "5px"}}> Ginecología </p> </td>
                                    <td> 24 - 07 - 2024 / 5:30 PM </td>
                                    <td> Leon Castillo, Carlos </td>
                                    <td> <p style={{background: "#AA0000", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={eliminarCita}> Eliminar </p> </td>
                                </tr>
                                <tr>
                                    <td> <p style={{background: "#0B5ED7", margin: "0px", color: "white", padding: "3px", borderRadius: "5px"}}> Dermatología </p> </td>
                                    <td> 24 - 07 - 2024 / 5:30 PM </td>
                                    <td> Leon Castillo, Carlos </td>
                                    <td> <p style={{background: "#AA0000", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={eliminarCita}> Eliminar </p> </td>
                                </tr>
                                <tr>
                                    <td> <p style={{background: "#0B5ED7", margin: "0px", color: "white", padding: "3px", borderRadius: "5px"}}> Pediatría </p> </td>
                                    <td> 24 - 07 - 2024 / 5:30 PM </td>
                                    <td> Leon Castillo, Carlos </td>
                                    <td> <p style={{background: "#AA0000", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={eliminarCita}> Eliminar </p> </td>
                                </tr>
                                <tr>
                                    <td> <p style={{background: "#0B5ED7", margin: "0px", color: "white", padding: "3px", borderRadius: "5px"}}> Neurología </p> </td>
                                    <td> 24 - 07 - 2024 / 5:30 PM </td>
                                    <td> Leon Castillo, Carlos </td>
                                    <td> <p style={{background: "#AA0000", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={eliminarCita}> Eliminar </p> </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>  
                </div>
            </section>
        </>
    )
}

export default ComponenteMisCitas
