const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Symbol</th>
          <th>Current Price</th>
          <th>Total Volume</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => (
          <tr key={index}>
            <td>{data.name}</td>
            <td>
              <img src={data.image}></img>
            </td>
            <td>{data.symbol}</td>
            <td>&#36;{data.current_price}</td>
            <td>{data.total_volume}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
