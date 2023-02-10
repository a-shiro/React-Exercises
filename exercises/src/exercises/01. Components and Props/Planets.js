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
      <h1>Gas Planets</h1>
      {planets.map((planet) => planet.isGasPlanet && <p>{planet.name}</p>)}
      <h1>Not Gas Planets</h1>
      {planets.map((planet) => !planet.isGasPlanet && <p>{planet.name}</p>)}
    </div>
  );
};
