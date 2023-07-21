import React, {useState, useEffect, useRef} from 'react';

import { ReactComponent as DownArrow } from '../assets/down-arrow.svg';
import { ReactComponent as UpArrow } from '../assets/up-arrow.svg';
import Action from './Action';

const Comment = (props) => {
    const [input, setInput] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [expand, setExpand] = useState(false);
    const inputRef = useRef(null);

    const {
        comment,
        handleInsertNode,
        handleEditNode,
        handleDeleteNode
    } = props;

    useEffect(() => {
        inputRef?.current?.focus();
    }, [editMode])

    const onAddComment = () => {
        if (input === "" || inputRef.current?.innerText === "") {
            setShowInput(false);
            setEditMode(false);
            return;
        }

        if (editMode) {
            handleEditNode(comment.id, inputRef?.current?.innerText);
        } else {
            setExpand(true);
            handleInsertNode(comment.id, input);
            setShowInput(false);
            setInput("");
        }

        if (editMode) setEditMode(false);
    }

    const handleNewComment = () => {
        setExpand(!expand);
        setShowInput(true);
    }

    const handleDelete = () => {
        handleDeleteNode(comment.id);
    }

  return (
    <div>
        <div className={comment.id === 1 ? "inputContainer" : "commentContainer"}>
            {comment.id === 1 ? (
                <>
                    <input 
                        type="text"
                        className="inputContainer__input first_input"
                        autoFocus
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='type...'
                    />
                    <Action className="reply comment" type="COMMENT" handleClick={onAddComment} />
                </>
            ) : (
                <>
                    <span 
                        contentEditable={editMode} 
                        suppressContentEditableWarning={editMode} 
                        style={{wordWrap: "break-word"}}
                        ref={inputRef}
                        >
                            {comment.name}
                    </span>


                    <div style={{display: "flex", marginTop: "5px"}}>
                        {editMode ? (
                            <>
                                <Action className="reply" type="SAVE" handleClick={onAddComment}/>
                                <Action 
                                    className="reply" 
                                    type="CANCEL" 
                                    handleClick={() => {
                                        if (inputRef.current) {
                                            inputRef.current.innerText = comment.name;
                                        }
                                        setEditMode(false)
                                    }}/>
                            </>
                        ) : (
                            <>
                                <div style={{marginTop: "2px"}}>
                                    {
                                        expand ? (
                                            <i className="fa-solid fa-caret-up" width="10px" height="10px" onClick={() => setExpand(!expand)}></i>
                                        ) : (
                                            <i className="fa-solid fa-caret-down" width="10px" height="10px" onClick={() => setExpand(!expand)}></i>
                                        )
                                    }{" "}
                                </div>
                                <Action className="reply" type="REPLY" handleClick={handleNewComment}/>
                                <Action className="reply" type="EDIT" handleClick={() => {setEditMode(true)}}/>
                                <Action className="reply" type="DELETE" handleClick={handleDelete}/>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
        <div style={{display: expand ? "block" : "none", paddingLeft: "25px"}}>
            {showInput && (
                <div className="inputContainer">
                     <input 
                        type="text"
                        className="inputContainer__input first_input"
                        autoFocus
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='type...'
                    />
                    <Action className="reply" type="REPLY" handleClick={onAddComment}/>
                    <Action 
                        className="reply" 
                        type="CANCEL" 
                        handleClick={() => {
                            setShowInput(false);
                            if (comment?.items?.length) {
                                setExpand(false);
                            }
                        }}/>
                </div>
            )}
            {
                comment?.items?.map((cmnt) => {
                    return <Comment key={cmnt.id} 
                                    comment={cmnt}
                                    handleInsertNode={handleInsertNode}
                                    handleEditNode={handleEditNode}
                                    handleDeleteNode={handleDeleteNode}
                                    />
                })
            }
        </div>
    </div>
  )
}

export default Comment;