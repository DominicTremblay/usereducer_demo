export const CREATE_SUPERHEROE = 'CREATE_SUPERHEROE';

export const DELETE_SUPERHEROE = 'DELETE_SUPERHEROE';

export const UPDATE_SUPERHEROE = 'UPDATE_SUPERHEROE';

const reducer = (state, action) => {
  // {
  //   type: 'CREATE_SUPERHERO',
  //   superheroe: {
  //     id: 70,
  //     name: 'Batman',
  //     occupation: 'Businessman',
  //     base: 'Gotham City'
  //   }
  // }

  // depending on the action types, we want to do create, delete, or update
  // return the new updated state

  switch (action.type) {
    case CREATE_SUPERHEROE:
      return {
        ...state,
        superheroes: [...state.superheroes, action.superhero],
        heroesCount: state.heroesCount + 1,
        lastUpdatedOn: new Date('2023-09-10'),
      };

    case DELETE_SUPERHEROE:
      const updatedList = state.superheroes.filter(
        (hero) => hero.id !== action.id
      );

      return {
        ...state,
        superheroes: updatedList,
        heroesCount: state.heroesCount - 1,
        lastUpdatedOn: new Date('2023-10-10'),
      };

    case UPDATE_SUPERHEROE:
      const updatedHeroes = state.superheroes.map((hero) => {
        if (hero.id === action.id) {
          return action.superhero;
        }

        return hero;
      });

      return {
        ...state,
        superheroes: updatedHeroes,
        lastUpdatedOn: new Date('2023-11-10'),
      };

    default:
      throw new Error(`The action type ${action.type} doest not exist`);
  }
};

export default reducer;
