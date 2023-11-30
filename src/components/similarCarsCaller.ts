import { Car } from "./types";

export async function getSimilarCars(make: string): Promise<Car[]> {
  const response = await fetch(
    `http://cars-api-webapp.azurewebsites.net/similar-cars?make=${make}`
  );
  if (!response.ok) {
    console.log("Error making API request");
    return [];
  }
  return response.json() as unknown as Car[];
}
