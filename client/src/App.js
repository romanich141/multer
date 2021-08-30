import React, { useState, useCallback } from "react";
import defaultImage                     from "./images/default.png";
import axios                            from "axios";
import Loader                           from "./loader/Loader";
import Button                           from "./button/Button";
import './App.css';


const App = () => {
  const [src, setSrc] = useState(null);
  const [file, setFile] = useState(null);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  const renderImage = () => {
    return <Loader className="image" load={ load }>
      <img
        className="image"
        src={ src ?? defaultImage }
        alt="Изображение"
      />
    </Loader>
  }

  const getFileToSend = () => {
    const fd = new FormData();
    fd.append("avatar", file);
    return fd;
  }

  const uploadFile = useCallback(e => {
    const [file] = e?.target?.files;
    setFile(file);
  }, [file]);

  const sendFile = async () => {
    try {
      setLoad(false)
      const response = await axios({
        method: "post",
        url: "upload",
        headers: { "content-Type":'multipart/form-data' },
        data: getFileToSend(),
      })
      setSrc(response?.data?.path)

    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoad(true)
    }
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

  if(error) {
    return "Error"
  }

  return (
    <>
      <header></header>
      <main className="images__list">
        { renderImage() }
        { renderForm() }
        <Button
          onClick={ file && sendFile }
          children={ "Upload" }
          isDisabled={ !load }
        />
      </main>
    </>
  );
}

export default App;
