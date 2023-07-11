import React, { useState } from "react";
import axios from "axios";

const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setUploadStatus("No se ha seleccionado ningún archivo");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("/upload", formData);
      setUploadStatus("Archivo subido correctamente");
      console.log(response.data);
    } catch (error) {
      setUploadStatus("Error al subir el archivo");
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Subir archivo</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Subir</button>
      </form>
      <p>{uploadStatus}</p>
    </div>
  );
};

export default FileUploadForm;
