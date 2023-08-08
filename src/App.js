import { useState } from 'react';
import './App.css';

function App() {
  const [superheroes, setSuperheroes] = useState([
    {
      id: 309,
      name: 'Harley Quinn',
      occupation: 'Psychiastrist',
      base: 'Gotham City',
    },
  ]);

  const getLastId = () => superheroes.slice(-1)[0].id;

  const createSuperhero = (superhero) =>
    setSuperheroes((state) => [...state, superhero]);

  const allSuperheroes = superheroes.map(({ id, name, occupation, base }) => (
    <li key={id}>
      Name: {name}, Occupation: {occupation}, Base: {base}
    </li>
  ));

  const deleteSuperhero = (id) => {
    const updatedList = superheroes.filter((hero) => hero.id !== id);

    setSuperheroes((state) => updatedList);
  };

  const updateSuperhero = (id, superhero) => {
    const updatedList = superheroes.map((hero) => {
      if (hero.id === id) {
        return superhero;
      }

      return hero;
    });

    setSuperheroes((state) => updatedList);
  };

  return (
    <div className="App">
      <h1>Superheroes</h1>
      <ul>{allSuperheroes}</ul>

      <input
        type="button"
        value="Create"
        onClick={() =>
          createSuperhero({
            id: 70,
            name: 'Batman',
            occupation: 'Businessman',
            base: 'Gotham City',
          })
        }
      />

      <input
        type="button"
        value="Delete"
        onClick={() => deleteSuperhero(getLastId())}
      />

      <input
        type="button"
        value="Update"
        onClick={() =>
          updateSuperhero(getLastId(), {
            id: 370,
            name: 'Joker',
            occupation: 'Joking around',
            base: 'Arkham Asylum',
          })
        }
      />
    </div>
  );
}

export default App;
