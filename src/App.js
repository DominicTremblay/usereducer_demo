import { useReducer } from 'react';
import reducer, {
  CREATE_SUPERHEROE,
  DELETE_SUPERHEROE,
  UPDATE_SUPERHEROE,
} from './reducers/reducer';
import DispatchContext from './DispatchContext';
import StateContext from './StateContext';
import './App.css';
import Superheroes from './Superheroes';

function App() {
  const [state, dispatch] = useReducer(reducer, {
    superheroes: [
      {
        id: 309,
        name: 'Harley Quinn',
        occupation: 'Psychiastrist',
        base: 'Gotham City',
      },
    ],
    heroesCount: 1,
    lastUpdatedOn: new Date(),
  });

  const getLastId = () => state.superheroes.slice(-1)[0].id;

  const createSuperhero = (superhero) =>
    dispatch({ type: CREATE_SUPERHEROE, superhero });

  const deleteSuperhero = (id) => dispatch({ type: DELETE_SUPERHEROE, id });

  const updateSuperhero = (id, superhero) =>
    dispatch({ type: UPDATE_SUPERHEROE, id, superhero });

  return (
    <div className="App">
      <h1>Superheroes</h1>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <Superheroes />
        </StateContext.Provider>
      </DispatchContext.Provider>

      <div>Count: {state.heroesCount}</div>
      <div>Last updated on: {state.lastUpdatedOn.toDateString()}</div>

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
