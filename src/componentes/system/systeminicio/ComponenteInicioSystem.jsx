import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Swal from 'sweetalert2';
import "./iniciosystem.css";

export function ComponenteBarraNavLateral() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const links = [
        { path: "/system/inicio", name: "Inicio", icono: "bi bi-house-door-fill" },
        { path: "/system/reservarcita", name: "Reservar Cita", icono: "bi bi-calendar-week-fill" },
        { path: "/system/miscitas", name: "Mis Citas", icono: "bi bi-folder-fill" },
        { path: "/system/consultamedica", name: "Perfil Médico", icono: "bi bi-clipboard2-pulse-fill" },
        { path: "/system/perfil", name: "Mi Perfil", icono: "bi bi-person-circle" },
        { path: "/system/historial", name: "Mi Historial", icono: "bi bi-heart-pulse-fill" },
    ];

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const logOut = () => {
        Swal.fire({
            title: '¡Cierre de sesión satisfactoriamente!',
            text: '¡Gracias por preferirnos!',
            icon: 'success',
        });
        navigate("/inicio");
        localStorage.clear();

    }

    return (
        <>
            <nav className={`barralateral ${isCollapsed ? 'collapsed' : ''}`}>
                <div className='encabezado'>
                    <i onClick={toggleCollapse} style={{color: "black", fontSize: "35px", cursor: "pointer"}} className="bi bi-list"></i>
                    <i onClick={logOut} style={{color: "black", fontSize: "35px", cursor: "pointer"}}  className={isCollapsed ? 'hidden' : 'bi bi-box-arrow-right'}></i>
                </div>
                <div className='linkslateral'>
                    <div id='busqueda' className={isCollapsed ? 'hidden' : ''}>
                        <i className='bi-search' style={{color: "black"}}> </i> <input className='m-1' type="search" name="search" id="search" placeholder='Buscar...' />
                    </div>
                    {links.map((link, index) => (
                        <div key={index} className={location.pathname === link.path ? 'active' : ''}>
                            <Link to={link.path}> <i className={link.icono}> </i> {isCollapsed ? '' : link.name} </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </>
    )
}

const historial = JSON.parse(localStorage.getItem('historial')) || [];

const misCitas = JSON.parse(localStorage.getItem('citas')) || [];

const obtenerDatosCitas = () => {
    // Filtrar las citas confirmadas (historial)
    const confirmadas = historial.length;
    
    // Filtrar las citas no confirmadas (mis Citas)
    const noConfirmadas = misCitas.length;
    return { confirmadas, noConfirmadas };
};



function ComponenteInicioSystem() {
    const [citasData, setCitasData] = useState({ confirmadas: 0, noConfirmadas: 0 });


    useEffect(() => {
        const data = obtenerDatosCitas();
        setCitasData(data);
    }, []);

    const options = {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Estado de Citas'
        },
        series: [{
            name: 'Citas',
            data: [
            { name: 'Confirmadas', y: citasData.confirmadas },
            { name: 'No Confirmadas', y: citasData.noConfirmadas }
            ]
        }]
    };

    return (
        <section className="d-flex row">
            <div className="col-12 col-sm-12 system d-flex" style={{ width: '100%' }}>
            <ComponenteBarraNavLateral />
            <section className="contenedorInfoInicio">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <HighchartsReact highcharts={Highcharts} options={options} />
                    </div>
                    <div className="col-md-6 mb-4">
                        <HighchartsReact highcharts={Highcharts} options={options} />
                    </div>
                    <div className="col-md-6 mb-4">
                        <HighchartsReact highcharts={Highcharts} options={options} />
                    </div>
                    <div className="col-md-6 mb-4">
                        <HighchartsReact highcharts={Highcharts} options={options} />
                    </div>
                </div>
            </section>
            </div>
        </section>
    );
}



export default ComponenteInicioSystem;


