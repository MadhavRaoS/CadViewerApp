import React, { useState } from "react";
import axios from "axios";
import "./UploadForm.css"; // Import CSS file

const UploadForm = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file!");

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://127.0.0.1:5000/upload", formData);
      onUpload(response.data.filename);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="file-input"
      />
      <button onClick={handleUpload} className="upload-button">
        {loading ? "Uploading..." : "Upload Model"}
      </button>
    </div>
  );
};

export default UploadForm;
