import { useRef, useState } from "react";

export default function DragAndDrop({ initialState }) {
  const [data, setData] = useState(initialState);
  const dragItem = useRef();
  const dragContainer = useRef();

  const handleDragStart = (e, item, container) => {
    dragItem.current = item;
    dragContainer.current = container;
    e.target.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetContainer) => {
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;
    setData((prev) => {
      const newData = { ...prev };
      newData[sourceContainer] = newData[sourceContainer].filter(
        (i) => i !== item
      );
      newData[targetContainer] = [...newData[targetContainer], item];
      return newData;
    });
  };
  return (
    <div className="container">
      {Object.keys(data).map((container, index) => {
        return (
          <div
            key={index}
            onDrop={(e) => handleDrop(e, container)}
            onDragOver={handleDragOver}
            className="item-container"
          >
            <h2>{container}</h2>
            {data[container].map((item, idx) => {
              return (
                <div
                  key={idx}
                  onDragStart={(e) => handleDragStart(e, item, container)}
                  onDragEnd={handleDragEnd}
                  draggable
                  className="item"
                >
                  {item}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
