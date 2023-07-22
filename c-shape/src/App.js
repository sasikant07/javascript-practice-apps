import {useState, useEffect} from "react";
import './App.css';

let order = 0;
let isAllClicked = false;
function App() {
  const [boxState, setBoxState] = useState(getBoxes("initial"));

  useEffect(() => {
    if (boxState.some((box) => !box.isClicked)) {
      isAllClicked = false;
    } else {
      isAllClicked = true;
    }

    if (isAllClicked) {
      boxState.forEach((item, index) => {
        return setTimeout(() => {
          let tempBox = [...boxState];
          tempBox[index].isClicked = false;
          setBoxState(tempBox);
        }, 1000 * (index + 1));
      })
    }

  }, [boxState]);

  function getBoxes (type) {
    let boxesData = [];
    const boxes = [0, 1, 2].map((i) => {  // for top row
      return [0, 1, 2].map((j) => {     // for bottom row
        if (!(i === 1 && j > 0)) {    // for middle row

          if (type === "initial") {
            return boxesData.push({ i, j, isClicked: false, order: null });
          }

          return (
            <div
              onClick={() => changeColor(i, j)}
              className="box"
              style={{backgroundColor: boxState?.find((item) => item.i === i && item.j === j)?.isClicked ? "green" : ""}}
            ></div>
          );
        }

        return <div></div>;
      });
    });

    if (type === "initial") {
      return boxesData;
    }

    return boxes;
  }

  const changeColor = (i, j) => {
    let temp = [...boxState];
    const selectedBox = temp.find((item) => item.i === i && item.j === j);
    selectedBox.isClicked = true;
    selectedBox.order = ++order;
    temp.sort((a, b) => a.order > b.order ? 1 : -1);
    setBoxState(temp);
  }

  return (
    <div className="App">
      <div className="box-container">
        {getBoxes()}
      </div>
    </div>
  );
}

export default App;
