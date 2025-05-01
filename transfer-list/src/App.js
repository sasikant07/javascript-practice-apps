import react, { useId, useState } from "react";
import "./App.css";
import ItemsList from "./components/ItemsList";

const DEFAULT_ITEMS_LEFT = ["HTML", "JavaScript", "CSS", "TypeScript"];
const DEFAULT_ITEMS_RIGHT = ["React", "Angular", "Vue", "Svelte"];

function generateItemsObject(items) {
  return items.reduce((acc, label) => {
    acc[label] = false;
    return acc;
  }, {});
}

function hasNoSelectedItesms(items) {
  return Object.values(items).every((val) => !val);
}

function transferAllItems(itemsSrc, setItemsSrc, itemsDest, setItemsDest) {
  setItemsDest((prevItems) => ({ ...prevItems, ...itemsSrc }));
  setItemsSrc({});
}

function transferSelectedItems(itemsSrc, setItemsSrc, itemsDest, setItemsDest) {
  setItemsDest((prevItems) => ({
    ...prevItems,
    ...Object.fromEntries(
      Object.entries(itemsSrc).filter(([_, value]) => value)
    ),
  }));

  setItemsSrc((prevItems) =>
    Object.fromEntries(Object.entries(prevItems).filter(([_, value]) => !value))
  );
}

function App() {
  const [itemsLeft, setItemsLeft] = useState(
    generateItemsObject(DEFAULT_ITEMS_LEFT)
  );
  const [itemsRight, setItemsRight] = useState(
    generateItemsObject(DEFAULT_ITEMS_RIGHT)
  );

  return (
    <>
      <h1 className="heading-text">Transfer List</h1>
      <div className="transfer-list">
        <ItemsList items={itemsLeft} setItems={setItemsLeft} />
        <div className="transfer-list_actions">
          <button
            aria-label="Transfer all items to left list"
            disabled={Object.keys(itemsRight).length === 0}
            onClick={() =>
              transferAllItems(
                itemsRight,
                setItemsRight,
                itemsLeft,
                setItemsLeft
              )
            }
          >
            <span aria-hidden={true}>&lt;&lt;</span>
          </button>
          <button
            aria-label="Transfer selected items to left list"
            disabled={hasNoSelectedItesms(itemsRight)}
            onClick={() =>
              transferSelectedItems(
                itemsRight,
                setItemsRight,
                itemsLeft,
                setItemsLeft
              )
            }
          >
            <span aria-hidden={true}>&lt;</span>
          </button>
          <button
            aria-label="Transfer selected items to right list"
            disabled={hasNoSelectedItesms(itemsLeft)}
            onClick={() =>
              transferSelectedItems(
                itemsLeft,
                setItemsLeft,
                itemsRight,
                setItemsRight
              )
            }
          >
            <span aria-hidden={true}>&gt;</span>
          </button>
          <button
            aria-label="Transfer all items to right list"
            disabled={Object.keys(itemsLeft).length === 0}
            onClick={() =>
              transferAllItems(
                itemsLeft,
                setItemsLeft,
                itemsRight,
                setItemsRight
              )
            }
          >
            <span aria-hidden={true}>&gt;&gt;</span>
          </button>
        </div>
        <ItemsList items={itemsRight} setItems={setItemsRight} />
      </div>
    </>
  );
}

export default App;
