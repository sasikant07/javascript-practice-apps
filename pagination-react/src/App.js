import React, {useState} from "react";
import './App.css';
import Data from "./Data.json";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCurrPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {records.map((data, index) => (
            <tr key={index}>
              <td>{data.ID}</td>
              <td>{data.Name}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prevPage}>Prev</a>
            </li>
            {numbers.map((num, index) => (
              <li className={`page-item ${currentPage === num ? "active" : ""}`} key={index}>
                <a href="#" className="page-link" onClick={() => changeCurrPage(num)}>{num}</a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>Next</a>
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
