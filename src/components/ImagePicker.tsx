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
    <div className="container">
      <div className="col-sm-4 p-4 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-center">Submit image here</h5>
            <input
              className="form-control mt-4 mb-2"
              type="file"
              id="formFile"
            />
            <button
              className="btn btn-primary"
              type="submit"
              id="submitButton"
              onClick={handleButtonClick}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <ImageResult make={predictedMake} />
      <SimilarImages similarCars={similarCars} />
    </div>
  );
}

export default ImagePicker;
