import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
    return (

        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <Sidebar />
                </div>
                <div className="col py-3">
                    {/* inicio contenido */}

                    <div className="p-5 mb-4 rounded-3"
                    style={{color:"#0d6efd", backgroundColor:"#e0e4e6"}}>
                        <div className="container-fluid py-5">
                            <img className="cover"
                            src=""></img>
                            <h1 className="display-5 fw-bold"
                            style={{float:"inline-end"}}>
                            Dashboard</h1>
                            
                        </div>
                    </div>

           





            {/* fin contenido */}
        </div>
            </div >
        </div >



    );
};

export default Dashboard