import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';

const Table = () => {
  const [data] = useState(Array.from(Array(100).keys(), (n) => n + 1));
  const [filteredData, setFilteredData] = useState(data);
  const [current, setCurrent] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const totalRecords = 100;

  useEffect(() => {
    const temp = data.slice((current - 1) * perPage, current * perPage);
    setFilteredData(temp);
  }, [perPage]);

  const onChange = ({start, end, current}) => {
    const temp = data.slice(start, end);
    setFilteredData(temp);
    setCurrent(current);
  }

  const changePerPage = (value) => {
    setPerPage(value);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          { filteredData.map((val, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{val}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination 
        current={current}
        totalRecords={totalRecords}
        perPage={perPage}
        onChange={onChange}
        changePerPage={changePerPage}
      />
    </>
  )
}

export default Table;