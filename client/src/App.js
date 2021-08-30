import React, { useState, useCallback } from "react";
import defaultImage                     from "./images/default.png";
import axios from "axios";
import './App.css';


const App = () => {
  const [src, setSrc] = useState(null);
  const [file, setFile] = useState(null);

  const renderImage = () => {
    return <img 
      className="image"
      src={ src ?? defaultImage }
      alt="Изображение"
    />
  }

  const getFileToSend = () => {
    const fd = new FormData();
    fd.append("avatar", src);
    return fd;
  }

  const uploadFile = e => {
    const [file] = e?.target?.files;
    setFile(file);
  };

  const sendFile = async () => {
    await axios({
      method: "post",
      url: "avatar",
      headers: { "Content-Type":'multipart/form-data' },
      data: getFileToSend(),
    })

    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const renderSendButton = () => {
    return <button 
      onClick={ sendFile }
    >
      "Download"
    </button>
  }

  const renderForm = () => {
    return <form 
      action="/profile" 
      method="post" 
      enctype="multipart/form-data"
    >
      <input 
        onChange={ uploadFile }
        type="file" 
        name="avatar" 
      />
    </form>
  };

  return (
    <>
      <header></header>
      <main className="images__list">
        { renderImage() }
        { renderForm() }
        { renderSendButton() }
      </main>
    </>
  );
}

export default App;
