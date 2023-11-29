export function getSimilarCars(tag: string) {
  const carsArray = [
    { model: "Audi", path: "audi one .jpeg" },
    { model: "Audi", path: "audi two.jpeg" },
    { model: "Audi", path: "audi three.jpg" },
    { model: "Audi", path: "audi four.jpg" },
    { model: "Audi", path: "audi five.jpeg" },
    { model: "BMW", path: "bmw one.jpeg" },
    { model: "BMW", path: "bmw two.png" },
    { model: "BMW", path: "bmw three.jpeg" },
    { model: "BMW", path: "bmw four.jpeg" },
    { model: "BMW", path: "bmw five.jpeg" },
    { model: "Kia", path: "kia one.jpeg" },
    { model: "Kia", path: "kia two.jpeg" },
    { model: "Kia", path: "kia three.jpeg" },
    { model: "Kia", path: "kia four.jpeg" },
    { model: "Kia", path: "kia five.jpeg" },
  ];
  const similarCars = carsArray.filter(
    (car) => car.model.toLowerCase() === tag.toLowerCase()
  );
  return similarCars;
}
