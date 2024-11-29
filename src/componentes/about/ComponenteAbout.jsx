import React from 'react'
import { BarraNavegacionPrincipal } from "../../routers/index";
import "./about.css";

function ComponenteAbout() {
    return (
        <>
            <BarraNavegacionPrincipal />
            <section className="container contenedorAbout mt-5 mb-5">
                <div className="row m-0">
                    <div className="col-12 col-md-6">

                    </div>
                    <div className="col-12 col-md-6 img1">

                    </div>
                </div>
            </section>
            <section className="container contenedorAbout mt-5 mb-5">
                <div className="row m-0">
                    <div className="col-12 col-md-6 img2">

                    </div>
                    <div className="col-12 col-md-6">

                    </div>
                </div>
            </section>
        </>
    )
}

export default ComponenteAbout;
