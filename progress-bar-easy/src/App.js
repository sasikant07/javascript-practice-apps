import { useState } from "react";
import ProgressBar from "./components/Progressbar";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? <ProgressBar /> : ""}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </>
  );
}
