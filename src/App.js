import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import LogoClinica from "./img/logoclinica.jpeg";
import { ComponenteInicioSystem, ComponenteReservaCita, ComponenteMisCitas, ComponenteConsulta, ComponentePerfil, ComponenteHistorial, ComponenteInicio, ComponenteAbout, ComponenteTeam, ComponenteLogin, ComponenteSignUp} from "./routers/index"


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(function() {
        let loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.remove();
        }
        let content = document.getElementById('content');
        if (content) {
            content.style.display = 'block';
        }
    }, 4000);
});

function App() {
    return (
        <div className="App">
            <div id="loading-screen">
                <img src={LogoClinica} alt="Logo Clinica" /> 
                <div className="spinner-border" role="status">
                    <span className="sr-only"> </span>
                </div>
            </div>
            <div id="content">
                <Router>
                    <Routes>
                        <Route index path='/' element={<Navigate to="/inicio" />}/>
                        <Route path='/inicio' element={<ComponenteInicio />}/>
                        <Route path='/about' element={<ComponenteAbout />}/>
                        <Route path='/team' element={<ComponenteTeam />}/>
                        <Route path='/login' element={<ComponenteLogin />}/>
                        <Route path='/signup' element={<ComponenteSignUp />}/>
                        <Route path='/system/inicio' element={<ComponenteInicioSystem />}/>
                        <Route path='/system/reservarcita' element={<ComponenteReservaCita />}/>
                        <Route path='/system/miscitas' element={<ComponenteMisCitas />}/>
                        <Route path='/system/consultamedica' element={<ComponenteConsulta />}/>
                        <Route path='/system/perfil' element={<ComponentePerfil />}/>
                        <Route path='/system/historial' element={<ComponenteHistorial />}/>
                    </Routes>
                </Router>
                <footer className='row'>
                    <div className=" col-12 col-sm-4 d-flex flex-column justify-content-center align-items-center gap-3">
                        <span> <i style={{color: "red"}} className="bi-heart"></i> <strong> Centro de Salud </strong>  </span>
                        <p className="m-0"> <strong> Tu salud, nuestra prioridad </strong>  </p>
                        <div className="mt-2 iconos">
                            <i className="bi-facebook"></i>
                            <i className="bi-twitter"></i>
                            <i className="bi-instagram"></i>
                            <i className="bi-youtube"></i>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 d-flex flex-column justify-content-center align-items-center gap-3">
                        <a href="/inicio"> Home </a>
                        <a href="/about"> Acerca De </a>
                        <a href="/team"> Team </a>
                        <a href="/signup"> Sign Up</a>
                        <a href="/login"> Login </a>
                    </div>
                    <div className=" col-12 col-sm-4 d-flex flex-column justify-content-center align-items-center gap-3">
                        <p className="m-0 text-center">
                            <strong>
                                C. Juan Hoyle Palacios 287, San Miguel, Lima, Perú | Teléfono: (01) 234-5678 |
                                Correo: contacto@clinicasaludintegral.pe
                            </strong>
                        </p>
                        <p style={{fontSize: "12px", textAlign: "center"}}>
                            <strong>
                                &copy; 2024 | Todos los derechos reservados.
                            </strong>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
