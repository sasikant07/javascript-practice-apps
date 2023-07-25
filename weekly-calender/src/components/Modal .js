import React, { useState } from "react";

const Modal = ({setShowModal, setFormData, date}) => {
    const [text, setText] = useState("");
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(0);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (text === "" || from === 0 || to === 0) {
            return;
        }
        setFormData({text, from, to});
        setShowModal(false)
    }

  return (
    <div className="modal">
      <div className="overlay" onClick={() => setShowModal(false)}></div>
      <div className="modal-content">
            <div className="close-modal" onClick={() => setShowModal(false)}>
                <i className="fa-solid fa-xmark"></i>
            </div>
        <div className="modal-heading">
            <p>ADD EVENTS</p>
        </div>
        <hr />
        <form onSubmit={handleFormSubmit}>
            <label>Event Name : </label>
            <input type="text" className="event-name-input" autoFocus required value={text} onChange={(e) => setText(e.target.value)} placeholder="Type event name here..."/>
            <br/>
            <label>Date : </label>
            <input className="disabled-date" disabled value={date}/>
            <br />
            <label>From : </label>
            <input className="input-from-to" type="number" required min={0} max={23} value={from}    onChange={(e) => setFrom(e.target.value)}/> &nbsp;&nbsp;&nbsp;
            <label>To : </label>
            <input className="input-from-to" type="number" required min={0} max={23} value={to}  onChange={(e) => setTo(e.target.value)}/>
            <br />
            <div className="btn-group">
                <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="add-btn" onClick={() => {}}>Add</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
