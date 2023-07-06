import React, {useState} from "react";
import "./App.css";

function App () {
  const [value, setValue] = useState("");

  const handelClick = (e) => {
    setValue(value + e.target.value);
  }

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value}/>
          </div>
          <div>
            <input type="button" value="AC"  onClick={(e) => setValue("")} />
            <input type="button" value="DEL"  onClick={(e) => setValue(value.slice(0, -1))} />
            <input type="button" value="."  onClick={handelClick} />
            <input type="button" value="/"  onClick={handelClick} />
          </div>
          <div>
            <input type="button" value="7"  onClick={handelClick} />
            <input type="button" value="8"  onClick={handelClick} />
            <input type="button" value="9"  onClick={handelClick} />
            <input type="button" value="*"  onClick={handelClick} />
          </div>
          <div>
            <input type="button" value="4"  onClick={handelClick} />
            <input type="button" value="5"  onClick={handelClick} />
            <input type="button" value="6"  onClick={handelClick} />
            <input type="button" value="+"  onClick={handelClick} />
          </div>
          <div>
            <input type="button" value="1"  onClick={handelClick} />
            <input type="button" value="2"  onClick={handelClick} />
            <input type="button" value="3"  onClick={handelClick} />
            <input type="button" value="-"  onClick={handelClick} />
          </div>
          <div>
            <input type="button" value="00"  onClick={handelClick} />
            <input type="button" value="0" onClick={handelClick} />
            <input type="button" value="=" className="equal" onClick={(e) => setValue(eval(value))}  />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;