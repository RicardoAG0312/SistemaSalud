import React, { useState, useEffect } from 'react';
import { ComponenteBarraNavLateral } from "../systeminicio/ComponenteInicioSystem";
import "./historial.css";

function ComponenteHistorial() {
    const [historial, setHistorial] = useState([]);

    useEffect(() => {
        const historialGuardado = JSON.parse(localStorage.getItem('historial')) || [];
        setHistorial(historialGuardado);
    }, []);

    return (
        <>
            <section className="d-flex row">
                <div className="col-12 col-sm-12 system d-flex" style={{ width: "100%" }}>
                    <ComponenteBarraNavLateral />
                    <section className="contenedorInfoHistorial">
                        <h1 className="text-center" style={{ fontSize: "70px", padding: "30px 20px" }}> MI HISTORIAL </h1>
                        <table className="table table-striped text-center">
                            <thead>
                                <tr className="table-secondary">
                                    <th style={{ fontWeight: "bold", padding: "20px" }}> Estado </th>
                                    <th style={{ fontWeight: "bold", padding: "20px" }}> Fecha</th>
                                    <th style={{ fontWeight: "bold", padding: "20px" }}> Doctor </th>
                                    <th style={{ fontWeight: "bold", padding: "20px" }}> Función </th>
                                </tr>
                            </thead>
                            <tbody>
                                {historial.length > 0 ? (
                                    historial.map((cita, index) => (
                                        <tr key={index}>
                                            <td>Confirmada</td>
                                            <td>{cita.fecha}</td>
                                            <td>{cita.doctor}</td>
                                            <td>Consulta Médica</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center">
                                            No tienes citas confirmadas.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </section>
                </div>
            </section>
        </>
    );
}

export default ComponenteHistorial;

