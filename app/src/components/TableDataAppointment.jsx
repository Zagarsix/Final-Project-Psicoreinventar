const TableDataAppointment = (index, date, pacient_id, doctor_id, pacient, doctor, service, invoice) => {
  

    return (
        <tbody
            className="table-group-divider"
            style={{ fontSize: "13px" }}
        >
            <tr>
                <td scope="row" className="td p-2">
                    #{index}
                </td>
                <td className="td p-2">{date}</td>
                <td className="td p-2">{pacient_id}</td>
                <td className="td p-2">{pacient}</td>
                <td className="td p-2">{doctor_id}</td>
                <td className="td p-2">{doctor}</td>
                <td className="td p-2">{service}</td>
                <td className="td p-2">{invoice}</td>
                <td className="td p-2">
                    <div>
                        <input
                            className="form-check-input"
                            type="radio"
                            name="radioNoLabel"
                            id="radioNoLabel1"
                            value=""
                            aria-label="..."
                        ></input>
                        <input
                            className="form-check-input"
                            type="radio"
                            name="radioNoLabel"
                            id="radioNoLabel1"
                            value=""
                            aria-label="..."
                        ></input>
                    </div>
                </td>
            </tr>
        </tbody>
    );
};

export default TableDataAppointment;

