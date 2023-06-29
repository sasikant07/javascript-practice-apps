import React, { FC } from 'react';
import { Node } from '../utils/interface';
import CheckItem from './CheckItem';

type Props = {
    data: Node[];
    setData: (node: Node) => void;
}

const NestedChecklist:FC<Props> = ({data, setData}) => {
  return (
    <div>
        {
            data.map((node) => (
                <CheckItem node={node} key={node.value} setData={setData} />
            ))
        }
    </div>
  )
}

export default NestedChecklist;

export function getSelectedValues(data: Node[]): string[] {
  


    return [];
}