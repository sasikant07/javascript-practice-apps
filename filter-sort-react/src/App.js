import React, { useState } from "react";
import { posts } from "./data";
  
export default function App() {

  const card = {
    background: "aliceblue",
    border: "2px solid aqua",
    borderRadius: "25px",
    paddingLeft: "60px",
    marginBottom: "25px"
  };

  const margin = {
    marginLeft: "200px"
  };


  // const posts = [
  //   { title: 'a', description: 'This is b'},
  //   { title: 'ab', description: 'This is ab'},
  //   { title: 'kkk', description: 'This is kkk'},
  //   { title: 'abcd', description: 'This is abcd'},
  //   { title: 'nmert', description: 'This is nmert'},
  //   { title: 'Yertsa', description: 'This is Yertsa'}
  // ]

  // Store sortby order i.e. ascending or descending
  const [sortType, setSortType] = useState("ascending");

  // Sortby field i.e. title or description
  const [sortByField, setSortByField] = useState("title");

  // Store filter/latest posts
  const [result, setResult] = useState();
  
  const [state, setstate] = useState({
    query: '',
    list: posts
  })

  // Filter posts on typing in search input
  const handleChange = (e) => {
    const results = posts.filter(post => {
      if (e.target.value === "") return posts;
        return post[sortByField].toLowerCase().includes(e.target.value.toLowerCase())
    })

    setResult(results);

    setstate({
      query: e.target.value,
      list: sortFunc(results, sortType, sortByField)
    })
  }

  // Sort posts depending on sort type and available results
  function sortFunc(results, sortType, sortByField) {
    if (sortType === "ascending") {
      results.sort((a, b) => a[sortByField] < b[sortByField] ? -1 : 1)  
    }
    else if (sortType === "descending") {
      results.sort((a, b) => b[sortByField] > a[sortByField] ? 1 : -1)
    }
    return results;
  }

  // Dropdown to sort posts in ascending or descending order depending on title.
  function updatePosts(e) {
    setSortType(e);
    setstate({
      query: state.query,
      list: !result ? sortFunc(posts, e, sortByField) : sortFunc(result, e, sortByField)
    })
  }

  // Dropdown to sort posts in ascending or descending order depending on title.
  function sortBy(e) {
    setSortByField(e);
    setstate({
      query: state.query,
      list: !result ? sortFunc(posts, sortType, e) : sortFunc(result, sortType, e)
    })
  }

  return (
    <div style={{marginTop: "10px"}}>
     <form>
        <span style={margin}>Search</span>
        <input onChange={handleChange} value={state.query} type="search"/>          
        
        <span style={margin}>Sort By</span>
        <select defaultValue={'title'} onChange={(e) => sortBy(e.target.value)}>
          <option value="title" disabled>None</option>
          <option value="title">Title</option>
          <option value="description">Description</option>
        </select>
      
        <span style={margin}>Sort By</span>
        <select defaultValue={'DEFAULT'} onChange={(e) => updatePosts(e.target.value)}>
          <option value="DEFAULT" disabled>None</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
     </form>
     <ul>
      {(
          state.list.map(post => {
         return <div key={post.title} style={card}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
        })
        )}

        { state.list.length === 0 && <h2>Empty List !!!</h2> }
         
     </ul>
    </div>  
  );
}