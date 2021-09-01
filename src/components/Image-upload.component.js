import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";

const acceptableFiles = ["image/jpeg", "image/png", "image/bmp"];

const ImageUploadComponent = (props) => {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);

  function handleClose() {
    setOpen(false);
  }

  function handleSaveFile(files) {
    setFiles(files);
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        Add Image
      </Button>
      <DropzoneDialog
        open={open}
        onSave={handleSaveFile}
        acceptedFiles={acceptableFiles}
        maxFileSize={50000000}
        onClose={handleClose}
        showPreviews={true}
        showFileNamesInPreview={true}
      />
    </div>
  );
};

export default ImageUploadComponent;
