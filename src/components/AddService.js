import React, { useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
export default function AddService() {
  const [service, setService] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("title", service.title);
    formData.append("description", service.description);
    formData.append("price", service.price);
    fetch("https://hidden-beyond-00743-b937df4edd39.herokuapp.com/services", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  const handleInputBlur = (e) => {
    const filed = e.target.name;
    const value = e.target.value;
    const newService = { ...service, image: selectedFile };
    newService[filed] = value;
    setService(newService);
  };
  const handleFileUpload = (event) => {
    console.log(!selectedFile);
    const file = event.target.files[0];
    const fileName = file.name;
    let slicedFileName = fileName.slice(0, fileName.lastIndexOf("."));
    if (slicedFileName.length > 10) {
      slicedFileName = slicedFileName.slice(0, 10);
    }
    slicedFileName += fileName.slice(fileName.lastIndexOf("."));
    setSelectedFile(new File([file], slicedFileName));
  };
  return (
    <Container maxWidth="lg">
      <Box sx={{ width: "400px", mt: 3 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            name="title"
            fullWidth
            onBlur={(e) => handleInputBlur(e)}
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={5}
            fullWidth
            name="description"
            sx={{ my: 2 }}
            onBlur={(e) => handleInputBlur(e)}
          />
          <input
            accept=".png,.jpg"
            style={{ display: "none" }}
            id="file-upload"
            type="file"
            onChange={handleFileUpload}
            name="image"
            required
          />
          <label htmlFor="file-upload">
            <Button variant="outlined" component="span">
              <UploadFileIcon />
              Upload Image
            </Button>
          </label>
          {selectedFile && <span>{selectedFile.name}</span>}
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            name="price"
            fullWidth
            sx={{ my: 2 }}
            onBlur={(e) => handleInputBlur(e)}
            type="number"
          />
          <Button variant="contained" type="submit" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
