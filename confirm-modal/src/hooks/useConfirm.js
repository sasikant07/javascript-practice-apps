import {useState, useRef} from "react";

const useConfirm = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [content, setContent] = useState("Are you sure you want to delete?");
    const awaitingPromise = useRef(null);

    const triggerConfirm = (content) => {
        setShowDialog(true);
        setContent(content);

        return new Promise((resolve) => {
            awaitingPromise.current = resolve;
        })
    }

    const ConfirmDialog = () => {
        const handleCancel = () => {
            awaitingPromise.current(false);
            setShowDialog(false);
        }
    
        const handleOk = () => {
            awaitingPromise.current(true);
            setShowDialog(false);
        }
    
        if (!showDialog) {
            return null;
        } else {
            return (
                <div className="modal" onClick={handleCancel}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header"></div>
                        <div className="modal-body">
                            <h3>{content}</h3>
                        </div>
        
                        <div className="modal-footer">
                            <button onClick={handleOk}>Yes</button>
                            <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return { triggerConfirm, ConfirmDialog };
}

export default useConfirm;