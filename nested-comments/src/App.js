import React, {useState} from "react";
import './App.css';
import Comment from "./components/Comment";
import useNode from "./hooks/useNode";

const comments = {
  id: 1,
  items: []
}

function App() {
  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  }

  const handleEditNode = (folderId, item) => {
    const finalStructure = editNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  }

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = {...finalStructure};
    setCommentsData(temp);
  }

  return (
    <div className="App">
      <Comment 
        comment={commentsData}
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
      />
    </div>
  );
}

export default App;
