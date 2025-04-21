import { useState } from "react";
import Preview from "./Preview";

export default function FileUploader() {
  const [files, setFiles] = useState([]);
  const [isDragging, setDragging] = useState(false);
  const handleChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles([...files, ...selectedFiles]);
  };
  const removeFile = (fileName) => {
    const filteredFiles = files.filter((file) => file.name !== fileName);
    setFiles(filteredFiles);
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files;
    setFiles([...files, ...droppedFile]);
    setDragging(false);
  };
  return (
    <div className="file-uploader">
      {/*Drag and Drop zone*/}
      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`dropzone ${isDragging ? "dragging" : ""}`}
      >
        <p>Drag and Drop File here or</p>
        <input
          onChange={handleChange}
          type="file"
          multiple
          className="hidden-input"
          id="file-input"
        />
        <label className="browse-btn" htmlFor="file-input">
          Browser Files
        </label>
      </div>
      {/*Preview Zone */}
      <div className="preview-container">
        {files.map((file) => {
          return (
            <Preview key={file.name} fileDetail={file} onRemove={removeFile} />
          );
        })}
      </div>
    </div>
  );
}
