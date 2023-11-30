import { useState } from "react";
import ImageResult from "./ImageResult";
import { getPredictedTag } from "../api/PredictionCaller";
import SimilarImages from "./SimilarImages";
import { getSimilarCars } from "../api/similarCarsCaller";
import { Car } from "../api/types";

function ImagePicker() {
  const [predictedMake, setPredictedMake] = useState("");
  const [similarCars, setSimilarCars] = useState<Car[]>([]);

  const handleButtonClick = async () => {
    const fileInput = document.getElementById("formFile") as HTMLInputElement;
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }
    const selectedFile = fileInput.files[0];
    const tag = await getPredictedTag(selectedFile);
    const similarCars = await getSimilarCars(tag);
    setPredictedMake(tag);
    setSimilarCars(similarCars);
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
      <SimilarImages similarCars={similarCars} />
    </>
  );
}

export default ImagePicker;
