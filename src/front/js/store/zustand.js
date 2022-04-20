import create from "zustand";

const useStore = create((set, get) => ({
  people: [],
  vehicles: [],
  planets: [],
  categories: [],

  actions: {
    getCategories: () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        mode: "cors",
      };
      console.log("process env", process.env.BACKEND_URL);

      // fetch(process.env.BACKEND_URL + "/api/categories", requestOptions)
      fetch(
        "https://3001-avokeys-buddyapp-jgj8u140k2t.ws-us34.gitpod.io/api/categories",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          set({
            categories: result,
          });
        });
    },

    addPeople: (person) => {
      set({
        people: get().people.concat(person),
      });
    },
    convertURL: (url) => {
      return url.replace(/https:\/\/swapi\.(dev|tech)\/api/i, "");
    },
    addVehicles: (vehicle) => {
      set({
        vehicles: get().vehicles.concat(vehicle),
      });
    },
    addPlanets: (planets) => {
      set({
        planets: get().planets.concat(planets),
      });
    },
  },
}));

export default useStore;
