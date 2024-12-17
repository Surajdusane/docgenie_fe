import { useState, useEffect } from "react";
import { Input } from "../ui/input";
import axios from "axios";

const FileInput = ({ name, endpoint }) => {
  const [file, setFile] = useState(null);

  // Use useEffect to handle the file submission
  useEffect(() => {
    const uploadFile = async () => {
      if (file) {
        const formData = new FormData();
        formData.append(name, file);
        try {
          const response = await axios.post(endpoint, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        } catch (error) {
          console.error("Error uploading file", error);
        }
      }
    };
    
    uploadFile(); // Call the function that uploads the file when `file` changes
  }, [file]); // Only trigger the effect when `file` changes

  const handleChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <Input type="file" name={name} onChange={handleChange} />
      {file && <p>File uploaded: {file.name}</p>}
    </div>
  );
};

export default FileInput;
