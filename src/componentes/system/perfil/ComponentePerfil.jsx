import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./perfil.css";

function ComponenteBarraNavLateral() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation();

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

    return (
        <nav className={`barralateral ${isCollapsed ? 'collapsed' : ''}`}>
            <div className='encabezado'>
                <i onClick={toggleCollapse} style={{color: "black", fontSize: "35px", cursor: "pointer"}} className="bi bi-list"></i>
                <i style={{color: "black", fontSize: "35px", cursor: "pointer"}}  className={isCollapsed ? 'hidden' : 'bi bi-box-arrow-right'}></i>
            </div>
            <div className='linkslateral'>
                <div id='busqueda' className={isCollapsed ? 'hidden' : ''}>
                    <i className='bi-search' style={{color: "black"}}> </i>
                    <input className='m-1' type="search" name="search" id="search" placeholder='Buscar...' />
                </div>
                {links.map((link, index) => (
                    <div key={index} className={location.pathname === link.path ? 'active' : ''}>
                        <Link to={link.path}> 
                            <i className={link.icono}> </i> 
                            {isCollapsed ? '' : link.name} 
                        </Link>
                    </div>
                ))}
            </div>
        </nav>
    );
}

function ComponentePerfil() {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const datosUsuario = JSON.parse(localStorage.getItem("usuario"));
        setUsuario(datosUsuario);
    }, []);

    if (!usuario) {
        return <p>Cargando datos del usuario...</p>;
    }

    return (
        <>
            <section className="d-flex row">
                <div className="col-12 col-sm-12 system d-flex" style={{ width: "100%" }}>
                    <ComponenteBarraNavLateral />
                    <section className="contenedorInfoPerfil">
                        <h1 className="mb-5 text-center">MI PERFIL:</h1>
                        <form>
                            <div className="form-group row mb-4">
                                <label htmlFor="dni" className="col-sm-2 col-form-label">DNI:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="dni" value={usuario.DNI || ''} disabled />
                                </div>
                            </div>
                            <div className="form-group row mb-4">
                                <label htmlFor="nombre" className="col-sm-2 col-form-label">Nombre:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="nombre" value={usuario.Nombre || ''} disabled />
                                </div>
                            </div>
                            <div className="form-group row mb-4">
                                <label htmlFor="apellido" className="col-sm-2 col-form-label">Apellido:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="apellido" value={usuario.Apellido || ''} disabled />
                                </div>
                            </div>
                            <div className="form-group row mb-4">
                                <label htmlFor="celular" className="col-sm-2 col-form-label">Celular:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="celular" value={usuario.Celular || ''} disabled />
                                </div>
                            </div>
                            <div className="form-group row mb-4">
                                <label htmlFor="correo" className="col-sm-2 col-form-label">Correo Electrónico:</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="correo" value={usuario.Correo || ''} disabled />
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        </>
    );
}

export default ComponentePerfil;
