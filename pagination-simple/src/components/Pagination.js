import React from 'react'

const Pagination = (props) => {
  const {current, totalRecords, perPage, onChange, changePerPage} = props;

  const getTotalPages = () => {
    return Math.ceil(totalRecords / perPage);
  }

  const prev = () => {
    if (current > 1) {
      const start = (current - 2) * perPage;
      const end = (current - 1) * perPage;
      onChange({start, end, current: current - 1});
    }
  }

  const total = getTotalPages();

  const next = () => {
    if (current >= 1 && current < total) {
      const start = current * perPage;
      const end = (current + 1) * perPage;
      onChange({start, end, current: current + 1});
    }
  }

  const handleChangePerPage = (value) => {
    if (current * value < totalRecords) {
      changePerPage(value); 
    } else {
      changePerPage(value);
      onChange({start: 0, end: value, current: 1});
    }
  }

  const direct = (i) => {
    if (current !== i) {
      const start = (i - 1) * perPage;
      const end = i * perPage;
      onChange({start, end, current: i});
    }
  }

  const links = [];
  for (let i = 1; i <= total; i++) {
    links.push(
      <button
        className={current === i ? "active": ""}
        onClick={() => direct(i)}
        key={i}
      >
        {i}
      </button>
    )
  }

  return (
    <div className="pagination">
      <select value={perPage} onChange={(e) => handleChangePerPage(e.target.value)}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
      <div className="wrapper">
        <button onClick={prev} disabled={current === 1}>&lt;</button>
        {links}
        <button onClick={next} disabled={current === total}>&gt;</button>
      </div>
    </div>
  )
}

export default Pagination;