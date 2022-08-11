import Sidebar from "../../components/Sidebar";
import SpecialistCard from "../../components/SpecialistCard";

const Doctores = () => {
    return (

        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <Sidebar />
                </div>
                <div className="col py-3">
                    {/* inicio contenido */}
                    <div className="container" >
                        <div className="row" >
                            <div className="col">
                                <h1>Panel doctores</h1>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col">
                                <h1>Agregar nuevo doctor</h1>
                                <form>
                                    <div className="row mb-3">
                                        <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">
                                            Nombre
                                        </label>
                                        <div className="col-sm-10">
                                            <input type="email" placeholder="Francisco Mandujano" className="form-control" id="inputEmail3" />
                                        </div>
                                    </div>
                                    <div>Agregar descripcion</div>
                                    <div className="form-floating">
                                        <textarea
                                            className="form-control"
                                            placeholder="Leave a comment here"
                                            id="floatingTextarea"
                                            defaultValue={""}
                                        />
                                        <label htmlFor="floatingTextarea">Descripcion</label>
                                    </div>


                                    <button type="submit" className="btn btn-primary">
                                        Guardar Cambios
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col">
                                <SpecialistCard />
                            </div>
                        </div>
                    </div>

                    {/* fin contenido */}
                </div>
            </div>
        </div>



    );
};

export default Doctores