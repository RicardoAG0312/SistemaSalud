import React, {useState} from 'react';
import { BarraNavegacionPrincipal } from "../../routers/index";
import "./inicio.css";



function ComponenteInicio() {
    const [nombres, setNombres] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");


    function limpiarCampos () {
        setNombres("");
        setCorreo("");
        setMensaje("");
    }

    return (
        <>
            <BarraNavegacionPrincipal />
            
            <section className="seccionFondoInicio"></section>

            <section className="seccionConvenios">
                <header className="text-center py-4" style={{fontSize: "2rem", color: "#00a38a"}}>
                    NUESTROS CONVENIOS
                </header>
                <div className="imagenesConvenios">
                    <a className="m-2" rel="noreferrer" target="_blank" href="https://www.rimac.com/salud/seguro-salud?rfid=publica:producto-salud-completo:menu-principal:link">
                        <img src={require("../../img/rimaclogo.jpeg")} alt="Rimac" className="img-fluid" />
                    </a>
                    <a className="m-2" rel="noreferrer" target="_blank" href="https://www.pacifico.com.pe/?utm_source=google&utm_medium=search&utm_campaign=2024-03_PAC_BRANDTERMS_AON_CON_SEARCH-BRAND&utm_content=CON_TODOS_CPC_PAL_BRAND_PXCC_-_TXT_NULL_SEGURO-PAC&from=google_-_search_-_2024-03_PAC_BRANDTERMS_AON_CON_SEARCH-BRAND_-_CON_TODOS_CPC_PAL_BRAND_PXCC_-_TXT_NULL_SEGURO-PAC&ds_rl=1273039&ds_rl=1275782&gad_source=1&gclid=Cj0KCQjwyL24BhCtARIsALo0fSDMkPDaCesE6n3aUsaGQEyQZg54WzF8nXw8q12tTxQo_wgMF9dz8iUaAvIEEALw_wcB&gclsrc=aw.ds">
                        <img src={require("../../img/pacificologo.jpeg")} alt="Pacifico" className="img-fluid" />
                    </a>
                    <a className="m-2" rel="noreferrer" target="_blank" href="https://salud.mapfre.com.pe/cotiza-salud/?msource=04&utm_source=google&utm_medium=cpl&utm_campaign=brand&utm_content=aon_wizard&utm_term=1">
                        <img src={require("../../img/mapfrelogo.jpeg")} alt="Mapfre" className="img-fluid" />
                    </a>
                    <a className="m-2" rel="noreferrer" target="_blank" href="https://www.lapositiva.com.pe/wps/portal/landing/medisalud">
                        <img src={require("../../img/positivalogo.jpeg")} alt="Positiva" className="img-fluid" />
                    </a>
                    <a className="m-2" rel="noreferrer" target="_blank" href="https://www.interseguro.pe/seguro-de-vida/vida-cash-plus/?utm_source=google&utm_medium=paidsearch&utm_campaign=vida_devolucion_pmax_grupo_1_tcpa-google-paidsearch-pf-on-vida-devolucion&gad_source=1&gclid=Cj0KCQjwyL24BhCtARIsALo0fSBCGrbXEvufunkDTPCuuFSuAXgLoGrs3p3RBuZqgltqxkfCz6OkOzwaAp_LEALw_wcB&mrasn=1158048.1435757.gKV0wtji">
                        <img src={require("../../img/intersegurologo.jpeg")} alt="Interseguro" className="img-fluid" />
                    </a>
                </div>
            </section>

            <form method='POST' className="container seccionFormulario mt-5">
                <h1 className="text-center"> CONTACTA CON NOSOTROS </h1>
                <div className="form-group subcontentform">
                    <label htmlFor="nombres"> Nombres Completos: </label>
                    <input type="text" className="form-control" id="nombres" name="nombres" value={nombres} onChange={(e) => setNombres(e.target.value)}/>
                </div>
                <div className="form-group subcontentform">
                    <label htmlFor="correo"> Correo Electrónico: </label>
                    <input type="email" className="form-control" id="correo" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                </div>
                <div className="form-group subcontentform">
                    <label htmlFor="mensaje"> Mensaje: </label>
                    <textarea className="form-control" id="mensaje" name="mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
                </div>
                <div className="btn btn-success btn-block" > 
                    <a style={{ textDecoration: "none", color: "white" }} href={`https://controldeacceso.infoexpert.com.pe/_/mail/send_mail_925.php?nombre=${nombres}&correo=${correo}&pss=${mensaje}`} target="_blank" rel="noreferrer" >
                        Enviar
                    </a>
                </div>
            </form>

            <iframe className="mt-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.571919590894!2d-77.09647822610432!3d-12.072947442386388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9643539655d%3A0x9167304d168e4010!2sC.%20Juan%20Hoyle%20Palacios%20287%2C%20San%20Miguel%2015088!5e0!3m2!1ses-419!2spe!4v1729204591589!5m2!1ses-419!2spe" width="100%" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </>
    )
}

export default ComponenteInicio;
