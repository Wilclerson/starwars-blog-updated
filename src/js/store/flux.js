const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		people: [],
		planets: [],
		vehicles: [],
		starships: [],
		favorites: [],
	  },
	  actions: {
		// fetching all star wars people
		fetchPeople: async () => {
		  const response = await fetch(
			`https://www.swapi.tech/api/people/?page=1&limit=100000`
		  )
			.then((response) => {
			  if (!response.ok) {
				throw new Error("Network response was not okay");
			  }
			  return response.json();
			})
			.catch((err) => {
			  console.error(err);
			});
		  setStore({ people: response.results });
		},
		fetchPlanets: async () => {
		  const response = await fetch(
			`https://www.swapi.tech/api/planets/?page=1&limit=100000`
		  )
			.then((response) => {
			  if (!response.ok) {
				throw new Error("Network response was not okay");
			  }
			  return response.json();
			})
			.catch((err) => {
			  console.error(err);
			});
		  setStore({ planets: response.results });
		},
		fetchVehicles: async () => {
		  const response = await fetch(
			`https://www.swapi.tech/api/vehicles/?page=1&limit=100000`
		  )
			.then((response) => {
			  if (!response.ok) {
				throw new Error("Network response was not okay");
			  }
			  return response.json();
			})
			.catch((err) => {
			  console.error(err);
			});
		  setStore({ vehicles: response.results });
		},
		fetchStarships: async () => {
		  const response = await fetch(
			`https://www.swapi.tech/api/starships/?page=1&limit=100000`
		  )
			.then((response) => {
			  if (!response.ok) {
				throw new Error("Network response was not okay");
			  }
			  return response.json();
			})
			.catch((err) => {
			  console.error(err);
			});
		  setStore({ starships: response.results });
		},
		addFavorite: async (name, type) => {
		  const store = getStore();
		  console.log(
			"checking if in favorites, will add to store if not already in favorites"
		  );
		  const isFavorite = store.favorites.find((item) => item.name === name);
		  const foundThing = store[type].find((item) => item.name === name);
  
		  if (isFavorite === undefined) {
			if (foundThing) {
			  foundThing.types = type;
			  setStore({ favorites: [...store.favorites, foundThing] });
			  console.log("added to store");
			}
		  }
		},
		deleteFavorite: async (name) => {
		  const store = getStore();
		  console.log(
			"checking if in favorites, will remove from store if found"
		  );
		  const updatedFavorites = store.favorites.filter(
			(item) => item.name !== name
		  );
		  if (updatedFavorites.length !== store.favorites.length) {
			setStore({ favorites: updatedFavorites });
			console.log("removed from store");
		  }
		},
	  },
	};
  };
  
  export default getState;