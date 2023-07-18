import { useState, useEffect, useRef } from "react";
import axios from "axios";
import './App.css';

function App() {
const [query, setQuery] = useState("");
const [data, setData] = useState([]);
const [hasMore, sethasMore] = useState(false);  // if API has more data or not
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(false);
const observer = useRef();

let timer;
const lastElement = (node) => {
  if (loading) return;
  if (observer.current) {
    observer.current.disconnect();  // if already an observer then disconnect from it, because we want to observe the new node, which has been loaded recently.
  }

  observer.current = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && hasMore) {
      setPage((prev) => prev + 1);
    }
  })

  if (node) {
    observer.current.observe(node);
  }
};

  const handleChange = (e) => {
    if (timer) {
      clearTimeout(timer);
    }
    
    timer = setTimeout(() => {
      setQuery(e.target.value);
      setPage(1);
    }, 1000)
  }

  useEffect(() => {
    setData([]);    // we don't need te old data, because new data will come along every time there is a change in data
  }, [])

  useEffect(() => {
    setLoading(true);

    const getSearchItems = async () => {
      const books = await axios.get(`http://openlibrary.org/search.json?title=${query}&page=${page}`);
      setLoading(false);
      sethasMore(books.data.docs.length > 0);
      setData((prev) => {
        return [...new Set([...prev, ...books.data.docs.map((book) => book.title)])];
      })
    }

    getSearchItems();
  }, [query, page]);


  return (
    <div className="searchContainer">
      <input type="text" onChange={handleChange} />
      {data.map((book, index) => {
        if (data.length === index + 1) {
          return <div key={index} ref={lastElement} className="searchTitle">{book}</div>
        } else {
          return <div key={index} className="searchTitle">{book}</div>
        }
      })}
      <div>{loading && <h2>Loading... Page Number: {page}</h2>}</div>
    </div>
  );
}

export default App;

