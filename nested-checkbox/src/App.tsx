import React, { useEffect, useState } from 'react';
import './App.css';
import {data } from './utils/data';
import { getFlattedChildren, isAllSelected } from './utils/utils';
import NestedChecklist from './components/NestedChecklist';
import { Node } from './utils/interface';

function App() {
  const [checklistData, setChecklistData] = useState<Node>(data);
  const allSelected = isAllSelected(checklistData);

  console.log("allSelected: ", allSelected);

  useEffect(() => {
    const nodes = getFlattedChildren(checklistData);
    const selected: string[] = [];
    nodes.forEach((node) => {
      if (node.isSelected) {
        selected.push(node.value);
      }
    });
    console.log("These are the selelcted nodes: ", selected);
    
  }, [checklistData]);

  const handleChange = () => [
    
  ]
  
  return (
    <div className="App" style={{ width: "180px"}}>
      <div style={{display: "flex", paddingBottom: "16px"}}>
        <label>
          <input
            type="checkbox"
            checked={allSelected}
            onChange={() => {
              setChecklistData((data) => {
                const flat = getFlattedChildren(data);
                flat.forEach((node) => {
                  node.isSelected = !allSelected;
                });
                return {...data};
              })
            }}
          />
          <span>{allSelected ? "Deselect all" : "Select All"}</span>
        </label>
      </div>
      <NestedChecklist data={checklistData.children} setData={setChecklistData} />
    </div>
  );
}

export default App;
