import { getSimilarCars } from "./similarCarsGetter";

function SimilarImages(props: any) {
  const similarCars = getSimilarCars(props.make);
  return (
    <>
      <div className="row">
        {similarCars.map((car) => (
          <div className="col-md-4" key={car.path}>
            <img
              src={car.path}
              alt={car.model}
              className="img-fluid img-thumbnail"
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default SimilarImages;
