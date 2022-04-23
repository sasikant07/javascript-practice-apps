import React, { useState } from 'react';
import './folder.css';

import { FaFile, FaFolder } from 'react-icons/fa'

const Folder = ({ explorer }) => {

    const [expand, setExapand] = useState(false);

    if (explorer.isFolder) {
        return (
            <div className='item-container'>
                <div className='btn-folder' onClick={() => setExapand(!expand)}>
                    <FaFolder />
                    <span className='folder-icon'>{explorer.name}</span>
                </div>

                <div className={expand ? 'folder' : 'file'}>
                    {
                        explorer.items.map(item => {
                            return <Folder explorer={item} />
                        })
                    }
                </div>
            </div>
        )
    } else {
        return (
           <>
            <div className='btn-file'>
                <FaFile />
                <span>{explorer.name}</span>
            </div>
            <br /></>
        )
    }
}

export default Folder