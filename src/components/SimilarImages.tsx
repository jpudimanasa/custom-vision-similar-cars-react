function SimilarImages(props: any) {
  return (
    <>
      <div className="row">
        {props.similarCars.map((car: any) => (
          <div className="col" key={car.path}>
            <img
              src={car.path}
              alt={car.model}
              className="object-fit-contain border rounded"
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default SimilarImages;
