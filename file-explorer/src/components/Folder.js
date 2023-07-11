import React, {useState} from 'react'

const Folder = ({explorer, handleInsertNode}) => {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    })

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();

        setExpand(true);
        setShowInput({
            visible: true,
            isFolder
        })
    }

    const onAddFolder = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder)
            setShowInput({...showInput, visible: false});
        }
    }

  if (explorer.isFolder) {
    return (
        <div style={{marginTop: "5px"}}>
            <div className="folder" onClick={() => setExpand(!expand)}>
                <span><i className="fa-regular fa-folder"></i> {explorer.name}</span>
                <div>
                    <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
                    <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
                </div>
            </div>
            <div style={{display: expand ? "block" : "none", paddingLeft: "25px"}}>
                {
                    showInput.visible && (
                        <div className="inputContainer">
                            <span>{showInput.isFolder ? <i className="fa-regular fa-folder"></i> : <i className="fa-regular fa-file"></i>}</span>
                            <input 
                                type="text"
                                onKeyDown={onAddFolder}
                                className="inputContainer-input" 
                                autoFocus 
                                onBlur={() => setShowInput({...showInput, visible: false})}
                            />
                        </div>
                    )

                }

                {explorer.items.map((exp) => {
                    return (
                        <Folder key={exp.id} explorer={exp} handleInsertNode={handleInsertNode} />
                    )
                })}
            </div>
        </div>
      )
  } else {
    return <span className="file"><i className="fa-regular fa-file"></i> {explorer.name}</span>
  }
}

export default Folder;