import React, { useState, useEffect } from 'react';
import { ComponenteBarraNavLateral } from "../systeminicio/ComponenteInicioSystem";
import "./miscitas.css";
import Swal from 'sweetalert2';

function ComponenteMisCitas() {
    const [citas, setCitas] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [historial, setHistorial] = useState([]);

    useEffect(() => {
        const citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];
        setCitas(citasGuardadas);
        const historialGuardado = JSON.parse(localStorage.getItem('historial')) || [];
        setHistorial(historialGuardado);
    }, []);

    const citasFiltradas = citas.filter((cita) =>
        cita.especialidad.toLowerCase().includes(filtro.toLowerCase())
    );

    function eliminarCita(index) {
        let citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];
        citasGuardadas.splice(index, 1); 
        localStorage.setItem('citas', JSON.stringify(citasGuardadas));
        Swal.fire({
            title: '¡Cita eliminada satisfactoriamente!',
            text: '¡Verifique sus citas!',
            icon: 'success',
        });
        window.location.reload();
    }

    function confirmacionCita(index) {
        const citaConfirmada = citas[index];

        let historialGuardado = JSON.parse(localStorage.getItem('historial')) || [];
        historialGuardado.push(citaConfirmada);
        localStorage.setItem('historial', JSON.stringify(historialGuardado));

        let citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];
        citasGuardadas.splice(index, 1); 
        localStorage.setItem('citas', JSON.stringify(citasGuardadas));

        setHistorial(historialGuardado);
        setCitas(citasGuardadas);

        Swal.fire({
            title: '¡Cita confirmada satisfactoriamente!',
            text: '¡Verifique su historial!',
            icon: 'success',
        });
    }

    return (
        <>
            <section className="d-flex row">
                <div className="col-12 col-sm-12 system d-flex" style={{ width: "100%" }}>
                    <ComponenteBarraNavLateral />
                    <section className="contenedorInfoReservaCita contenedorInfoMisCitas">
                        <h1 className="text-center"> CITAS AGENDADAS </h1>
                        
                        <div className='filterReserva container d-flex justify-content-center mb-3'>
                            <input
                                type="search"
                                name="search"
                                id="search"
                                placeholder='Buscar por especialidad...'
                                value={filtro}
                                onChange={(e) => setFiltro(e.target.value)}
                            />
                        </div>

                        <table className="table table-striped text-center">
                            <thead>
                                <tr className="table-secondary">
                                    <th>Especialidad</th>
                                    <th>Fecha</th>
                                    <th>Doctor</th>
                                    <th>Función</th>
                                </tr>
                            </thead>
                            <tbody>
                                {citasFiltradas.length > 0 ? (
                                    citasFiltradas.map((cita, index) => (
                                        <tr key={index}>
                                            <td>
                                                <p className="especialidad">
                                                    {cita.especialidad}
                                                </p>
                                            </td>
                                            <td>{cita.fecha}</td>
                                            <td>{cita.doctor}</td>
                                            <td>
                                                <div className="btn-group" role="group">
                                                    <button type="button" className="btn btn-danger" onClick={() => eliminarCita(index)}>Eliminar</button>
                                                    <button type="button" className="btn btn-warning" onClick={() => confirmacionCita(index)}>Confirmación</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center">
                                            No se encontraron citas para esa especialidad.
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

export default ComponenteMisCitas;

