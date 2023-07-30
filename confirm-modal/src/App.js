import {useState} from "react";
import './App.css';
import useConfirm from "./hooks/useConfirm";

function App() {
  const [deleteMessage, setDeleteMessage] = useState(false);

  const {triggerConfirm, ConfirmDialog} = useConfirm();

  const handleDelete = async () => {
    const deleteText = await triggerConfirm("Are you sure, you want to delete it?");
    setDeleteMessage(deleteText);
  }

  return (
    <div className="App">
      <h1>Window Confirm</h1>
      <button onClick={handleDelete}>Delete</button>
      <p>{deleteMessage ? <b>Confirmed</b> : "Not Yet"} : Delete this text</p>
      <ConfirmDialog />
    </div>
  );
}

export default App;
