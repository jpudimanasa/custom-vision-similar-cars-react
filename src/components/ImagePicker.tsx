import { useState } from "react";
import ImageResult from "./ImageResult";
import { getPredictedTag } from "./PredictionCaller";

function ImagePicker() {
  const [predictedMake, setPredictedMake] = useState("");

  const handleButtonClick = async () => {
    const fileInput = document.getElementById("formFile") as HTMLInputElement;
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const selectedFile = fileInput.files[0];
    const tag = await getPredictedTag(selectedFile);
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
