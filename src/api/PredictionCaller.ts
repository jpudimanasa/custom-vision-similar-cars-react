export async function getPredictedTag(selectedFile: File) {
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
  return tag;
}
