import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {ComponenteBarraNavLateral} from "../systeminicio/ComponenteInicioSystem";
import {ComponenteDoctor} from "../../team/ComponenteTeam";
import "./consulta.css";

function ComponenteConsulta() {
    return (
        <>
            <section className="d-flex row">
                <div className=" col-12 col-sm-12 d-flex" style={{width: "100%"}}>
                    <ComponenteBarraNavLateral />
                    <div className="contenedorInfoConsultaCita">
                        <h1> PERFIL MÉDICOS </h1>
                        <div className="container contenedorDoc">
                            <ComponenteDoctor 
                            imagen = "drodontologia"
                            alt = "Imagen Doctor - Odontología"
                            nombre = "Dr. Carlos Castillo"
                            especialidad = "Odontología"
                            titulo = "Dr. Carlos Castillo - Especialista en Odontología"
                            descripcion = "El Dr. Carlos Castillo es un odontólogo con más de 10 años de experiencia, comprometido con la salud bucal de sus pacientes, ofreciendo tratamientos avanzados y personalizados."
                            cualidad1 = "Precisión en procedimientos dentales"
                            cualidad2 = "Atención personalizada al paciente"
                            cualidad3 = "Promoción de la salud bucal"
                            subespecialidad = "Experto en procedimientos dentales avanzados, brindando atención personalizada y promoviendo la salud bucal integral."
                            />
                            <ComponenteDoctor 
                                imagen = "drcardiologia"
                                alt = "Imagen Doctor - Cardiología"
                                nombre = "Dr. Ana López"
                                especialidad = "Cardiología"
                                titulo = "Dr. Ana López - Especialista en Cardiología"
                                descripcion = "La Dr. Ana López es una cardióloga con más de 15 años de experiencia en el diagnóstico y tratamiento de enfermedades cardiovasculares."
                                cualidad1 = "Diagnóstico preciso"
                                cualidad2 = "Manejo de casos complejos"
                                cualidad3 = "Prevención de enfermedades cardíacas"
                                subespecialidad = "Especializada en el diagnóstico y tratamiento de enfermedades cardiovasculares, con un enfoque en la prevención y manejo de casos complejos"
                            /> 
                            <ComponenteDoctor 
                                imagen = "drpediatria"
                                alt = "Imagen Doctor - Pediatría"
                                nombre = "Dr. Luis Fernández"
                                especialidad = "Pediatría"
                                titulo = "Dr. Luis Fernández - Especialista en Pediatría"
                                descripcion = "El Dr. Luis Fernández es un pediatra con 12 años de experiencia, dedicado al cuidado integral del desarrollo infantil, ofreciendo un enfoque holístico en la salud de los niños"
                                cualidad1 = "Atención integral"
                                cualidad2 = "Tratamiento de enfermedades pediátricas"
                                cualidad3 = "Apoyo emocional para los pequeños"
                                subespecialidad = "Dedicado al cuidado integral del desarrollo infantil, ofreciendo prevención y tratamiento de enfermedades pediátricas con un enfoque en el bienestar emocional de los niños."
                            />
                            <ComponenteDoctor 
                                imagen = "drginecologia"
                                alt = "Imagen Doctor - Ginecología"
                                nombre = "Dr. Sofía Ramírez"
                                especialidad = "Ginecología"
                                titulo = "Dr. Sofía Ramírez - Especialista en Ginecología"
                                descripcion = "La Dr. Sofía Ramírez es una ginecóloga con más de 8 años de experiencia, especializado en la salud reproductiva femenina, brindando cuidado y asesoramiento integral."
                                cualidad1 = "Cuidado en salud reproductiva"
                                cualidad2 = "Manejo de embarazos y partos"
                                cualidad3 = "Prevención de enfermedades ginecológicas"
                                subespecialidad = "Proporciona cuidado y asesoramiento en salud reproductiva femenina, manejo de embarazos y partos, y prevención de enfermedades ginecológicas."
                            />
                            <ComponenteDoctor 
                                imagen = "drdermatologia"
                                alt = "Imagen Doctor - Dermatología"
                                nombre = "Dr. Juan Pérez"
                                especialidad = "Dermatología"
                                titulo = "Dr. Juan Pérez - Especialista en Dermatología"
                                descripcion = "El Dr. Juan Pérez es un dermatólogo con 14 años de experiencia, experto en el tratamiento de condiciones de la piel, ofreciendo diagnósticos precisos y cuidados avanzados."
                                cualidad1 = "Tratamiento avanzado para la piel"
                                cualidad2 = "Diagnóstico preciso"
                                cualidad3 = "Promoción del cuidado cutáneo saludable"
                                subespecialidad = "Ofrece tratamientos avanzados para la piel, diagnóstico preciso de condiciones dermatológicas y promoción del cuidado cutáneo saludable."
                            />
                            <ComponenteDoctor 
                                imagen = "drneurologia"
                                alt = "Imagen Doctor - Neurología"
                                nombre = "Dr. Marta Gonzáles"
                                especialidad = "Neurología"
                                titulo = "Dr. Marta Gonzáles - Especialista en Neurología"
                                descripcion = "La Dr. Marta Gonzáles es un neuróloga con más de 20 años de experiencia, dedicado a la evaluación y tratamiento de trastornos neurológicos, con un enfoque en terapias innovadoras."
                                cualidad1 = "Evaluación del sistema nervioso"
                                cualidad2 = "Tratamiento en trastornos neurológicos"
                                cualidad3 = "Terapias innovadoras"
                                subespecialidad = "Realiza evaluaciones exhaustivas del sistema nervioso, trata trastornos neurológicos y se dedica a la investigación de terapias innovadoras."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComponenteConsulta
