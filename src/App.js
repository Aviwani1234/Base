import { useState } from "react";
import "./App.css";
import { storage } from "./firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function App() {
  const [image, setImage] = useState(null);
  const uploadImage = () => {
    if (image == null) return;
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageRef, image).then(() => {
      alert("Image Uploaded Successfully!");
    });
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImage(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
}

export default App;
