import { useState } from "react";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 1000);

  return (
    <div className="App">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <hr />
      <h2>Normal : {search}</h2>
      <hr />
      <h2>Debounce : {debouncedValue}</h2>
    </div>
  );
}

export default App;
