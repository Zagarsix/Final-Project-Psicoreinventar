import "../styles/Invoice.css";
import Logo from "../img/nav-logo.png";

const Invoice = ({
  id,
  date_of_purchase,
  patient_name,
  patient_email,
  patient_phone,
  payment_method,
  service_id,
  date_appointment,
  specialist,
  price_service,
  total_amount,
}) => {
  return (
    <div className="invoice-container d-flex d-lg-block flex-column justify-content-center">
      <div className="invoice-box mb-5">
        {/* Invoice Header */}
        <div className="row d-flex flex-row justify-content-between">
          <div className="col-md-6">
            <img src={Logo} style={{ width: "100%", maxWidth: "200px" }} />
          </div>
          <div className="col-md-6 mt-3 mt-md-0">
            <p className="data-invoice mb-0">Invoice: # {id}</p>
            <p className="data-invoice">Date of purchase: {date_of_purchase}</p>
          </div>
        </div>
        {/* Client Info */}
        <div className="row mt-3">
          <div className="col-md-6">
            <p className="client-name text-primary fw-semibold">
              John Doe {patient_name}
            </p>
            <p className="client-data mb-1">
              {patient_email} johndoe@gmail.com
            </p>
            <p className="client-data"> {patient_phone} +1-3547859</p>
          </div>
        </div>
        {/* Payment method */}
        <div className="row mt-3">
          <div className="col-md-12 invoice-heading-bg">
            <p className="mb-0 invoice-heading">Payment Method</p>
          </div>
          <div className="col-md-6">
            <p className="pt-2 invoice-paragraph">
              MasterCard 8484{payment_method}
            </p>
          </div>
        </div>
        {/* Invoice Info small devices*/}
        <div className="invoice-info-sm d-block d-md-none">
          <div className="row mt-3">
            {/* Invoice info headers */}
            <div className="col-sm-12 d-flex flex-column flex-md-row">
              <div className="col-sm-12">
                <div className="invoice-heading invoice-heading-bg">
                  Servicio
                </div>
                <div className="invoice-paragraph">Terapia individual</div>
              </div>
              <div className="col-sm-12 mt-2 mt-md-0">
                <div className="invoice-heading invoice-heading-bg">
                  Especialista
                </div>
                <div className="invoice-paragraph">Walter Riso</div>
              </div>
              <div className="col-sm-12 mt-2 mt-md-0">
                <div className="invoice-heading invoice-heading-bg">
                  Fecha de la cita
                </div>
                <div className="invoice-paragraph">05-09-22</div>
              </div>
              <div className="col-sm-12 mt-2 mt-md-0">
                <div className="invoice-heading invoice-heading-bg">Precio</div>
                <div className="invoice-paragraph">30 USD</div>
              </div>
            </div>
          </div>
        </div>
        {/* Invoice Info larger devices*/}
        <div className="invoice-info-md d-none d-md-block">
          <div className="row mt-3">
            <div className="col-md-12 d-flex flex-column flex-md-row invoice-heading-bg">
              <div className="col-md-3">
                <div className="invoice-heading">Servicio</div>
              </div>
              <div className="col-md-3 mt-2 mt-md-0">
                <div className="invoice-heading">Especialista</div>
              </div>
              <div className="col-md-3 mt-2 mt-md-0">
                <div className="invoice-heading">Fecha de la cita</div>
              </div>
              <div className="col-md-3 mt-2 mt-md-0">
                <div className="invoice-heading">Precio</div>
              </div>
            </div>
            <div className="col-md-12 d-flex flex-column flex-md-row pt-2">
              <div className="col-md-3">
                <div className="invoice-paragraph">Terapia individual</div>
              </div>
              <div className="col-md-3 mt-2 mt-md-0">
                <div className="invoice-paragraph">Walter Riso</div>
              </div>
              <div className="col-md-3 mt-2 mt-md-0">
                <div className="invoice-paragraph">05-09-22</div>
              </div>
              <div className="col-md-3 mt-2 mt-md-0">
                <div className="invoice-paragraph">30 USD</div>
              </div>
            </div>
          </div>
        </div>

        {/* <table>
        <thead>
          <tr>
            <th className="logo" style={{ paddingRight: "8rem" }}>
              <img src={Logo} style={{ width: "100%", maxWidth: "200px" }} />
            </th>
            <th className="data-invoice">
              Invoice: # {id} <br /> Date of purchase: {date_of_purchase}
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Client Info */}
        {/* <tr className="patient-info">
            <td colSpan={4}>
              <div className="data-client">
                <p className="client-name text-primary">
                  <strong>John Doe{patient_name}</strong>
                </p>
                <p className="client-data">{patient_email} johndoe@gmail.com</p>
                <p className="client-data"> {patient_phone} +1-3547859</p>
              </div>
            </td>
          </tr>
          {/* Payment method */}
        {/* <tr>
            <th className="invoice-heading" colSpan={4}>
              Payment Method
            </th>
          </tr>
          <tr>
            <td className="pt-2">MasterCard 8484{payment_method}</td>
          </tr>
          {/* Invoice Info */}
        {/* <tr className="invoice-heading">
            <th className="invoice-info-heading">Servicio</th>
            <th className="invoice-info-heading">Especialista</th>
            <th className="invoice-info-heading">Fecha de la cita</th>
            <th className="invoice-info-heading">Precio</th>
          </tr> */}
        {/* </tbody> */}
        {/* </table> */}
        {/* <table>
        <tbody>
          <tr className="top">
            <td colSpan={4}>
              <table>
                <tbody>
                  <tr>
                    <td className="logo">
                      <img
                        src={Logo}
                        style={{ width: "100%", maxWidth: "200px" }}
                      />
                    </td>
                    <td className="data-invoice">
                      Invoice: #{id}
                      <br />
                      Date of purchase: {date_of_purchase}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr className="information">
            <td colSpan={4}>
              <div className="data-client">
                <p className="client-name">
                  <strong>{patient_name}</strong>
                </p>
                <p className="client-data">
                  {patient_email}
                  <br />
                  {patient_phone}
                </p>
              </div>
            </td>
          </tr>
          <tr className="heading">
            <td colSpan={3}>Payment Method</td>

            <td></td>
          </tr>
          <tr className="details">
            <td colSpan={3}>Payment method</td>

            <td>{payment_method}</td>
          </tr>
          <tr className="heading">
            <td>Service</td>
            <td>Specialist</td>
            <td>Appointment date</td>
            <td>Price</td>
          </tr>
          <tr className="item">
            <td>{service_id}</td>
            <td>{specialist}</td>
            <td>{date_appointment}</td>
            <td>{price_service}</td>
          </tr>
        </tbody>
        <tr className="total">
          <td colSpan={3} />
          <td>Total: ${total_amount}</td>
        </tr>
      </table> */}
      </div>
    </div>
  );
};

export default Invoice;
