import React, { useState, useRef, useCallback } from 'react'
import useBookSearch from './hooks/useBookSearch';
import "./App.css";

let timer;
const App = () => {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {
    books,
    hasMore,
    loading,
    error
  } = useBookSearch(query, pageNumber)

  const observer = useRef()
  const lastBookElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect();  // if already an observer then disconnect from it, because we want to observe the new node, which has been loaded recently.
    observer.current = new IntersectionObserver((entries) => {
      // console.log(entries[0]);
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  // function handleSearch(e) {
  //   setQuery(e.target.value)
  //   setPageNumber(1)
  // }

  // Debouncing
  const handleSearch = (e) => {
    if (timer) {
      clearTimeout(timer);
    }
    
    timer = setTimeout(() => {
      setQuery(e.target.value);
      setPageNumber(1);
    }, 1000)
  }

  return (
    <div className="searchContainer">
      <input type="text" onChange={handleSearch}></input>
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return <div className="searchTitle" ref={lastBookElementRef} key={book} >{book}</div>
        } else {
          return <div className="searchTitle" key={book}>{book}</div>
        }
      })}
      <div>{loading && <h2>Loading...</h2>}</div>
      <div>{error && 'Error'}</div>
    </div>
  )
}

export default App;


// The IntersectionObserver interface of the Intersection Observer API provides a way to asynchronously 
// observe changes in the intersection of a target element with an ancestor element or with a top-level 
// document's viewport.


// When an IntersectionObserver is created, it's configured to watch for given ratios of visibility 
// within the root. The configuration cannot be changed once the IntersectionObserver is created, so 
// a given observer object is only useful for watching for specific changes in degree of visibility; 
// here in the case of scroll to the last title/element
// however, you can watch multiple target elements with the same observer.

// Instance methods
// IntersectionObserver.disconnect()
// Stops the IntersectionObserver object from observing any target.

// IntersectionObserver.observe()
// Tells the IntersectionObserver a target element to observe.

// IntersectionObserver.takeRecords()
// Returns an array of IntersectionObserverEntry objects for all observed targets.

// IntersectionObserver.unobserve()
// Tells the IntersectionObserver to stop observing a particular target element.