import "./App.css";
import FileExplorer from "./component/FileExplorer";
import FileExplorerContextWrapper from "./context/FileExplorerContext";

// import data from "./data.json";
import data from "./data/FileExplorerData";

function App() {
  return (
    <FileExplorerContextWrapper>
      <FileExplorer />
    </FileExplorerContextWrapper>
  );
}

export default App;
