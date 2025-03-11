import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import ModelViewer from "./components/ModelViewer";
import "./App.css"; // Import CSS file

function App() {
  const [fileUrl, setFileUrl] = useState(null);

  return (
    <div className="container">
      <h1>3D CAD Viewer</h1>

      <div className="upload-box">
        <UploadForm onUpload={(filename) => setFileUrl(`http://127.0.0.1:5000/model/${filename}`)} />
      </div>

      {fileUrl && (
        <div className="viewer-box">
          <h2>Model Preview</h2>
          <ModelViewer fileUrl={fileUrl} />
        </div>
      )}
    </div>
  );
}

export default App;
