import Sidebar from "../../components/Sidebar";

const Profile = () => {
    return (

        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <Sidebar />
                </div>
                <div className="col py-3">
                    {/* inicio contenido */}
                    <div className="container">
                        <div className="row">
                            <div className="column">
                                <h1>Hola nombre de perfil </h1>
                            </div>

                            <div className="column">
                                <h1> Actualizar mis datos </h1>
                            </div>
                            <form>
                            <div className="row mb-3">
                                    <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">
                                        Nombre
                                    </label>
                                    <div className="col-sm-10">
                                        <input type="email" placeholder="Francisco Mandujano" className="form-control" id="inputEmail3" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">
                                        Email
                                    </label>
                                    <div className="col-sm-10">
                                        <input type="email" placeholder="francisco@gmail.com" className="form-control" id="inputEmail3" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputPassword3" className="col-sm-1 col-form-label">
                                        Password
                                    </label>
                                    <div className="col-sm-10">
                                        <input type="password" placeholder="*******" className="form-control" id="inputPassword3" />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Guardar Cambios
                                </button>
                            </form>

                        </div>
                    </div>



                    {/* fin contenido */}
                </div>
            </div>
        </div>



    );
};

export default Profile 