import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import HeaderContact from "../components/HeaderContact";

const Contact = (props) => {
    // Using context
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => { }, []);

    // React hook form
    const {
        contact,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: "all",
    });

    const onSubmit = (data) => {
        console.log(data);
    };
    const handleContact = (e) => {
        actions.handleContact(e, navigate);
    };

    return (
        <>
            <main className="main-section w-100 h-100 p-3 mb-5">
                <HeaderContact
                    title="Contáctanos"
                    description="Cuéntanos más sobre ti y nos comunicaremos contigo a la brevedad, para responder cualquier duda o consulta que tengas."
                    img="https://comofuncionaque.com/wp-content/uploads/2015/09/auriculares-para-videollamadas.jpg.jpg"
                    img2="https://images.squarespace-cdn.com/content/v1/51bdd6cfe4b09566e1112c43/1589638998131-G4ILO5V73CR4M1NU8BLU/zoom-video-conferencing-online-meeting-remote-workers-one-user-connected-via-laptop-with-a-grid-of-twelve-participants-on-screen-2400x1600-100837446-large.jpg"
                    img3="https://img.freepik.com/vector-premium/ayuda-psicologia-online-sesion-terapia-psicologo-virtual-hombre-deprimido-consigue-terapeuta-apoyo-mental-videollamada-concepto-vector-ilustracion-apoyo-mental-linea-consulta-psicologica_102902-4483.jpg?w=2000"
                />
                <div className="col-md-6">
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="Nombre"
                            placeholder="Nombre*"
                            required
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="Email"
                            placeholder="Email*"
                            required
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="HowKnowPscioreinventar"
                            placeholder="¿Cómo te enteraste de Psioreinventar?"
                            required
                        />
                    </div>
                </div>
                <div ClassName="col-md-6">
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            id="HowWeCanHelpYou"
                            rows={2}
                            placeholder="¿Cómo podemos ayudarte?"
                            required
                        />
                    </div>
                </div>
                <div className="col-6">
                    <button class="btn btn-primary" type="submit">Contáctanos</button>
                </div>
            </main>
        </>
    );
    
};

export default Contact;