import { useState } from "react";
import ImageResult from "./ImageResult";

function ImagePicker() {
  const [predictedMake, setPredictedMake] = useState("");

  const handleButtonClick = async () => {
    const fileInput = document.getElementById("formFile") as HTMLInputElement;
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const selectedFile = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);

    const response = await fetch(
      "https://mmissiontwo-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/5320f6a0-3325-46c7-aa92-3d0ff9cd1bc9/classify/iterations/Iteration8/image",
      {
        method: "POST",
        body: formData,
        headers: {
          "Prediction-key": "28cab18865cd42f2b976c1fd2383c442",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error making API request");
    }

    const data = await response.json();
    const tag = data.predictions[0].tagName;
    setPredictedMake(tag);
  };

  return (
    <>
      <div className="mb-3 col-4 p-3 mt-4">
        <label htmlFor="formFile" className="form-label">
          Submit image here
        </label>
        <input className="form-control" type="file" id="formFile" />
      </div>

      <div className="col-12 ms-4 mb-2">
        <button
          className="btn btn-primary"
          type="submit"
          id="submitButton"
          onClick={handleButtonClick}
        >
          Submit
        </button>
      </div>

      <ImageResult make={predictedMake} />
    </>
  );
}

export default ImagePicker;
