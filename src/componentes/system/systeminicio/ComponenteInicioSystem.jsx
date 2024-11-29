import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
        navigate("/inicio");
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

function ComponenteInicioSystem() {
    return (
        <>
            <section className="d-flex row">
                <div className="col-12 col-sm-12 system d-flex" style={{width: "100%"}}>
                    <ComponenteBarraNavLateral />
                    <section className="contenedorInfoInicio">
                        inicio
                    </section>
                </div>
            </section>
        </>
    )
}

export default ComponenteInicioSystem;
