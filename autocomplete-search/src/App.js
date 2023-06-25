import { useRef, useState, useMemo, Fragment } from 'react';

function App() {
 const [items, setItems] = useState([]);
 const [query, setQuery] = useState("");
 const inputRef = useRef();

 const filteredItems = useMemo(() => {
    return items.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase())
 })},[items, query]);

const handleSubmit = (e) => {
  e.preventDefault();
  const value = inputRef.current.value;
  if (value === "") {
    return
  }

  setItems(prev => {
    return [...prev, value]
  });

  inputRef.current.value = "";
}

const getHighlightedText = (text, highlight) => {
  let parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return parts.map((part, index) => (
    <Fragment key={index}>
      {
        part.toLowerCase() === highlight.toLowerCase() ? (
          <b style={{backgroundColor: "#e8bb49"}}>{part}</b>
        ) : (
          part
        )}
    </Fragment>
  ))
}

  return (
    <div>
      Search:
      <input value={query} onChange={e => setQuery(e.target.value)} type="search" />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        New Item: <input ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map((item, index) => (
        <div key={index}>
          <p>{getHighlightedText(item, query)}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
