import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import "./team.css";
import { BarraNavegacionPrincipal } from "../../routers/index";

export function ComponenteDoctor ({imagen, nombre, especialidad, alt, titulo, descripcion, cualidad1, cualidad2, cualidad3, subespecialidad}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="infoDoctor">
                <img src={require(`../../img/${imagen}.jpeg`)} alt={alt} />
                    <h3> 
                        <strong> 
                            {nombre}
                        </strong> 
                    </h3>     
                <p onClick={handleShow} style={{cursor: "pointer"}}> {especialidad} </p>
            </div>
            <Modal id="modalInfo" show={show} onHide={handleClose}>
                <div className="contendorInfoDoc1">
                    <div >
                        <img src={require(`../../img/${imagen}.jpeg`)} alt={alt} />
                    </div>
                    <div>
                        <p className='text-center'> <strong> {titulo} </strong> </p>
                        <p> 
                            <strong>
                                {descripcion}
                            </strong>
                        </p>
                    </div>
                    <div>
                        <h6 style={{fontSize: "14px"}}> <strong> Cualidades: </strong> </h6>
                        <ul>
                            <li> <strong> {cualidad1} </strong>   </li>
                            <li> <strong> {cualidad2} </strong> </li>
                            <li> <strong> {cualidad3} </strong> </li>
                        </ul>
                    </div>
                    <div >
                        <h6 style={{fontSize: "14px"}}> <strong> Especialidad: </strong> </h6>
                        <p>
                            <strong> {subespecialidad} </strong>
                        </p>
                    </div>
                    <div >
                        <p className="m-0" style={{background: "#0067DE", padding: "3px 25px", color: "white", borderRadius: "10px"}}>
                            {especialidad}
                        </p>
                    </div>
                </div>
            </Modal>
        </>
    )
}


function ComponenteTeam() {
    const [datos, setDatos] = useState([]); 

    const fetchDataDoctores = async () => {
        try {
            const apiURL = await fetch("http://localhost:3000/getDoctores");
            if (apiURL.ok) {
                const data = await apiURL.json();
                setDatos(data);
            } else {
                console.log("ERROR CON API")
            }
        } catch (error) {
            console.log(`HUBO ERROR EN LA LLAMADA DE LA API DE DATA DOCTORES: ${error}`);
        }
    }

    useEffect(() => {
        fetchDataDoctores();
    }, [])

    const dataEstatica = [
        {
            Imagen: "drodontologia",
            Alt: "Imagen Doctor - Odontología",
            Titulo: "Dr. Carlos Castillo - Especialista en Odontología",
            Descripcion: "El Dr. Carlos Castillo es un odontólogo con más de 10 años de experiencia, comprometido con la salud bucal de sus pacientes, ofreciendo tratamientos avanzados y personalizados.",
            Cualidad1: "Precisión en procedimientos dentales",
            Cualidad2: "Atención personalizada al paciente",
            Cualidad3: "Promoción de la salud bucal",
            Subespecialidad: "Experto en procedimientos dentales avanzados, brindando atención personalizada y promoviendo la salud bucal integral."
        },
        {
            Imagen: "drcardiologia",
            Alt: "Imagen Doctor - Cardiología",
            Titulo: "Dr. Ana López - Especialista en Cardiología",
            Descripcion: "La Dr. Ana López es una cardióloga con más de 15 años de experiencia en el diagnóstico y tratamiento de enfermedades cardiovasculares.",
            Cualidad1: "Diagnóstico preciso",
            Cualidad2: "Manejo de casos complejos",
            Cualidad3: "Prevención de enfermedades cardíacas",
            Subespecialidad: "Especializada en el diagnóstico y tratamiento de enfermedades cardiovasculares, con un enfoque en la prevención y manejo de casos complejos"
        },
        {
            Imagen: "drpediatria",
            Alt: "Imagen Doctor - Pediatría",
            Titulo: "Dr. Luis Fernández - Especialista en Pediatría",
            Descripcion: "El Dr. Luis Fernández es un pediatra con 12 años de experiencia, dedicado al cuidado integral del desarrollo infantil, ofreciendo un enfoque holístico en la salud de los niños",
            Cualidad1: "Atención integral",
            Cualidad2: "Tratamiento de enfermedades pediátricas",
            Cualidad3: "Apoyo emocional para los pequeños",
            Subespecialidad: "Dedicado al cuidado integral del desarrollo infantil, ofreciendo prevención y tratamiento de enfermedades pediátricas con un enfoque en el bienestar emocional de los niños."
        },
        {
            Imagen: "drginecologia",
            Alt: "Imagen Doctor - Ginecología",
            Titulo: "Dr. Sofía Ramírez - Especialista en Ginecología",
            Descripcion: "La Dr. Sofía Ramírez es una ginecóloga con más de 8 años de experiencia, especializado en la salud reproductiva femenina, brindando cuidado y asesoramiento integral.",
            Cualidad1: "Cuidado en salud reproductiva",
            Cualidad2: "Manejo de embarazos y partos",
            Cualidad3: "Prevención de enfermedades ginecológicas",
            Subespecialidad: "Proporciona cuidado y asesoramiento en salud reproductiva femenina, manejo de embarazos y partos, y prevención de enfermedades ginecológicas"
        },
        {
            Imagen: "drdermatologia",
            Alt: "Imagen Doctor - Dermatología",
            Titulo: "Dr. Juan Pérez - Especialista en Dermatología",
            Descripcion: "El Dr. Juan Pérez es un dermatólogo con 14 años de experiencia, experto en el tratamiento de condiciones de la piel, ofreciendo diagnósticos precisos y cuidados avanzados.",
            Cualidad1: "Tratamiento avanzado para la piel",
            Cualidad2: "Diagnóstico preciso",
            Cualidad3: "Promoción del cuidado cutáneo saludable",
            Subespecialidad: "Ofrece tratamientos avanzados para la piel, diagnóstico preciso de condiciones dermatológicas y promoción del cuidado cutáneo saludable."
        },
        {
            Imagen: "drneurologia",
            Alt: "Imagen Doctor - Neurología",
            Titulo: "Dr. Marta Gonzáles - Especialista en Neurología",
            Descripcion: "La Dr. Marta Gonzáles es un neuróloga con más de 20 años de experiencia, dedicado a la evaluación y tratamiento de trastornos neurológicos, con un enfoque en terapias innovadoras.",
            Cualidad1: "Evaluación del sistema nervioso",
            Cualidad2: "Tratamiento en trastornos neurológicos",
            Cualidad3: "Terapias innovadoras",
            Subespecialidad: "Realiza evaluaciones exhaustivas del sistema nervioso, trata trastornos neurológicos y se dedica a la investigación de terapias innovadoras."
        },
    ]

    return (
        <>
            <BarraNavegacionPrincipal />
            <div className="container-fluid team">
                <h1> PERFIL MÉDICOS </h1>
                <div className="container contenedorDoc">
                    {datos.map((doctor, index) => (
                        <ComponenteDoctor
                            key={index}
                            imagen={dataEstatica[index].Imagen}
                            alt={dataEstatica[index].Alt}
                            nombre={`Dr. ${doctor.Nombre}`}
                            especialidad={doctor.Especialidad}
                            titulo={dataEstatica[index].Titulo}
                            descripcion={dataEstatica[index].Descripcion}
                            cualidad1={dataEstatica[index].Cualidad1}
                            cualidad2={dataEstatica[index].Cualidad2}
                            cualidad3={dataEstatica[index].Cualidad3}
                            subespecialidad={dataEstatica[index].Subespecialidad}
                        />
                    ))}
                </div>
            </div>

        </>
    )
}

export default ComponenteTeam;
