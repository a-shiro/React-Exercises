const planets = [
  { name: "Mars", isGasPlanet: false },
  { name: "Earth", isGasPlanet: false },
  { name: "Jupiter", isGasPlanet: true },
  { name: "Venus", isGasPlanet: false },
  { name: "Naptune", isGasPlanet: true },
  { name: "Uranus", isGasPlanet: true },
];

export const Planets = () => {
  return (
    <div>
      {planets.map((planet) => planet.isGasPlanet && <h2>{planet.name}</h2>)}
    </div>
  );
};
