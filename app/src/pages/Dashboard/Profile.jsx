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
                    <div className="container"
                    style={{backgroundColor: "#8dc2fe", fontFamily: "monospace" }}>
                        <div className="row">
                            <div className="div">
                                <div className="col-md-12 p-4 my-3  text-center">
                                    <h2>Hola, <strong>Usuario Ficticio</strong> </h2>
                                </div>

                                <div className="col-md-12 p-4">
                                    <h6> Actualizar mis datos </h6>
                                </div>
                            </div>

                            <form
                                style={{ backgroundColor: "#fcfcfc", padding:"2em"}}>
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
                                
                                    <button type="submit" className="btn"
                                    style={{backgroundColor: "#8dc2fe", float:"inline-end"}}>
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