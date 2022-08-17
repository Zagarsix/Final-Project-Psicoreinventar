const TableClient = ({ name, lastname, email }) => {
  return (
    <>
      <h1>
        {name} {""} {lastname}
      </h1>
      <p>{email}</p>
    </>
  );
};

export default TableClient;
