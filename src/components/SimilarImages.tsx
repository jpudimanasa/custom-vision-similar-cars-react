function SimilarImages(props: any) {
  return (
    <>
      <div className="row">
        {props.similarCars.map((car: any) => (
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
