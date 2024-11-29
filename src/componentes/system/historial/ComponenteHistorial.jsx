import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {ComponenteBarraNavLateral} from "../systeminicio/ComponenteInicioSystem";
import "./historial.css";

function consultarCita () {
    alert("consultar cita");
}

function ComponenteHistorial() {
    return (
        <>
            <section className="d-flex row">
                <div className="col-12 col-sm-12 system d-flex" style={{width: "100%"}}>
                    <ComponenteBarraNavLateral />
                    <section className="contenedorInfoHistorial">
                        <h1 className="text-center" style={{fontSize: "70px", padding: "30px 20px"}}> MI HISTORIAL </h1>
                        <table className="table table-striped text-center">
                            <thead>
                                <tr className="table-secondary">
                                    <th style={{fontWeight: "bold", padding: "20px"}}> Estado </th>
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
                                    <td> <p style={{background: "#00AA22", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={consultarCita}> Consultar </p> </td>
                                </tr>
                                <tr>
                                    <td> <p style={{background: "#0B5ED7", margin: "0px", color: "white", padding: "3px", borderRadius: "5px"}}> Cardiología </p> </td>
                                    <td> 24 - 07 - 2024 / 5:30 PM </td>
                                    <td> Leon Castillo, Carlos </td>
                                    <td> <p style={{background: "#00AA22", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={consultarCita}> Consultar </p> </td>
                                </tr>
                                <tr>
                                    <td> <p style={{background: "#0B5ED7", margin: "0px", color: "white", padding: "3px", borderRadius: "5px"}}> Ginecología </p> </td>
                                    <td> 24 - 07 - 2024 / 5:30 PM </td>
                                    <td> Leon Castillo, Carlos </td>
                                    <td> <p style={{background: "#00AA22", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={consultarCita}> Consultar </p> </td>
                                </tr>
                                <tr>
                                    <td> <p style={{background: "#0B5ED7", margin: "0px", color: "white", padding: "3px", borderRadius: "5px"}}> Dermatología </p> </td>
                                    <td> 24 - 07 - 2024 / 5:30 PM </td>
                                    <td> Leon Castillo, Carlos </td>
                                    <td> <p style={{background: "#00AA22", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={consultarCita}> Consultar </p> </td>
                                </tr>
                                <tr>
                                    <td> <p style={{background: "#0B5ED7", margin: "0px", color: "white", padding: "3px", borderRadius: "5px"}}> Pediatría </p> </td>
                                    <td> 24 - 07 - 2024 / 5:30 PM </td>
                                    <td> Leon Castillo, Carlos </td>
                                    <td> <p style={{background: "#00AA22", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={consultarCita}> Consultar </p> </td>
                                </tr>
                                <tr>
                                    <td> <p style={{background: "#0B5ED7", margin: "0px", color: "white", padding: "3px", borderRadius: "5px"}}> Neurología </p> </td>
                                    <td> 24 - 07 - 2024 / 5:30 PM </td>
                                    <td> Leon Castillo, Carlos </td>
                                    <td> <p style={{background: "#00AA22", margin: "0px", color: "white", padding: "3px", borderRadius: "5px", cursor: "pointer"}} onClick={consultarCita}> Consultar </p> </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </section>
        </>
    )
}

export default ComponenteHistorial
