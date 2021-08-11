import react, { useState } from 'react'

const ImageUploadComponent = () => {
    const [currentFile, setCurrentFile] = useState(undefined);
    const [previewFile, setPreviewFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");
    const [imageInfos, setImageInfos] = useState([]);

    const selectFile = (event) => {
        console.log(event.target.files[0]);
        setProgress(0);
        setMessage("");
        setCurrentFile(event.target.files[0]);
        setPreviewFile(URL.createObjectURL(event.target.files[0]))
    }

    const uploadFile = (event) => {
        console.log(event.target.files[0])
    }


    return(
        <div>
            <p>Image Upload</p>
        </div>
    )
}

export default ImageUploadComponent;