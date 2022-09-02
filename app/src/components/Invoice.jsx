
import "../styles/Invoice.css";
import Logo from "../img/nav-logo.png";

const Invoice = ({invoice_id, date_of_purchase, patient_name, patient_email, patient_phone, payment_method, service_id, date_appointment, specialist, price_service, total_amount}) => {

    return (
        <div className="invoice-box mb-5">
            <table>
                <tbody>
                <tr className="top">
                <td colSpan={4}>
                    <table>
                        <tbody>
                        <tr>
                            <td className="title">
                            <img src={Logo}
                            style={{ width: "100%", maxWidth: 200 }} /> 
                            </td>
                            <td className="data-invoice">
                            Invoice: #{invoice_id}
                            <br/>
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
                                <p className="client-name"><strong>{patient_name}</strong></p>
                                <p className="client-data">{patient_email}
                                <br />
                                {patient_phone}</p>
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
                        <td colSpan={3}/>
                        <td>Total: ${total_amount}</td>
                    </tr>
            </table>
        </div>

    )


};


export default Invoice;