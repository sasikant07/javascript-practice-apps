import React, { FC } from 'react'
import { isAllSelected, toggleAllChildren, toggleNodeSelected } from '../utils/utils';
import NestedChecklist from './NestedChecklist';
import { Node } from '../utils/interface';

type Props = {
    node: Node;
    setData: (node: Node) => void;
}

const CheckItem:FC<Props> = ({node, setData}) => {
  return (
    <div style={{width: "100%"}}>
        <div 
            style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%"
            }}>
                <label style={{ color: node.isDisabled ? "gray": "black"}}>
                    <input 
                        type="checkbox"
                        checked={node.isSelected}
                        disabled={node.isDisabled}
                        onChange={(e) => toggleNodeSelected(node.value, setData)}
                    />
                    <span>{node.label}</span>
                </label>
                <div>
                    <input 
                        type="checkbox"
                        disabled={node.isCollapsed}
                        checked={isAllSelected(node)}
                        onChange={() => toggleAllChildren(node.value, setData)}
                    />
                </div>
        </div>
        <div style={{paddingLeft: "16px", paddingTop: "8px"}}>
            <NestedChecklist data={node.children} setData={setData} />
        </div>
    </div>
  )
}

export default CheckItem;