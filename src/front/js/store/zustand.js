import create from "zustand";

const useStore = create((set, get) => ({
  categories: [],
  selectedCategories: [],
  goals: [],
  user: [],

  actions: {
    goals: (array) => {
      set({
        goals: array,
      });
    },
    getGoals: () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        mode: "cors",
      };

      fetch(process.env.BACKEND_URL + "/api/goals", requestOptions)
        // fetch(
        //   "https://3001-avokeys-buddyapp-4rimlyd8qp6.ws-us41.gitpod.io/api/categories",
        //   requestOptions
        // )
        .then((response) => response.json())
        .then((result) => {
          set({
            goals: result,
          });
        });
    },

    register: (user, email, pwd, inspiration, funFact) => {
      var requestOptions = {
        method: "POST",
        // redirect: "follow",
        // mode: "cors",
        body: JSON.stringify({
          username: user,
          email: email,
          password: pwd,
          inspiration: inspiration,
          fun_fact: funFact,
        }),
        headers: { "Content-type": "application/json" },
      };
      fetch(process.env.BACKEND_URL + "/api/signup", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        });
    },

    login: (username, pwd) => {
      var requestOptions = {
        method: "POST",
        // redirect: "follow",
        // mode: "cors",
        body: JSON.stringify({
          username: username,
          password: pwd,
        }),
        headers: { "Content-type": "application/json" },
      };
      fetch(process.env.BACKEND_URL + "/api/login", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          set({
            user: result,
            selectedCategories: result.categories,
          });
        });
    },

    changeGoal: (boolean, id) => {
      var requestOptions = {
        method: "PUT",
        // redirect: "follow",
        // mode: "cors",
        body: JSON.stringify({ is_done: boolean, id: id }),
        headers: { "Content-type": "application/json" },
      };
      fetch(process.env.BACKEND_URL + "/api/goal", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          let info = get().goals;
          let filter = info.filter((item, index) => item.id != id);
          let updated = [...filter, result];
          set({
            goals: updated,
          });
        });
    },

    selectedCategories: (array) => {
      set({
        selectedCategories: array,
      });
    },
    getCategories: () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        mode: "cors",
      };
      console.log("process env", process.env.BACKEND_URL);

      fetch(process.env.BACKEND_URL + "/api/categories", requestOptions)
        // fetch(
        //   "https://3001-avokeys-buddyapp-4rimlyd8qp6.ws-us41.gitpod.io/api/categories",
        //   requestOptions
        // )
        .then((response) => response.json())
        .then((result) => {
          set({
            categories: result,
          });
        });
    },
    getSelectedCategories: (id) => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        mode: "cors",
      };

      fetch(process.env.BACKEND_URL + `/api/user/${id}`, requestOptions)
        // fetch(
        //   "https://3001-avokeys-buddyapp-4rimlyd8qp6.ws-us41.gitpod.io/api/categories",
        //   requestOptions
        // )
        .then((response) => response.json())
        .then((result) => {
          set({
            selectedCategories: result.categories,
          });
        });
    },
  },
}));

export default useStore;
