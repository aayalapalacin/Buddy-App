import create from "zustand";

const useStore = create((set, get) => ({
  categories: [],
  todos: [],
  goals: [],
  user: [],
  selectedCategories: [],
  buddy: [],
  currentSession: {},
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

    register: async (user, email, pwd, inspiration, funFact) => {
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
      try {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/signup",
          requestOptions
        );
        const data = await response.json();
        if (data.user) {
          set({
            user: data,
          });
          return data;
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.log("Error loading message from backend", error);
      }
    },

    login: async (username, pwd) => {
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
      try {
        const response = await fetch(
          process.env.BACKEND_URL + "/api/login",
          requestOptions
        );
        const data = await response.json();
        console.log("token data", data.access_token);
        if (data.user) {
          set({
            user: data,
          });
          actions.setLocalStore(data.user.email, data.access_token);
          return data;
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.log("Error loading message from backend", error);
      }
    },

    setLocalStore: (user_id, token) => {
      const payload = { user_id: user_id, token: token };
      localStorage.setItem("session", JSON.stringify(payload));
      setStore({ currentSession: payload });
    },

    getCurrentSession: () => {
      const session = JSON.parse(localStorage.getItem("session"));
      return session;
    },

    clearSession: () => {
      localStorage.removeItem("session");
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
    addSelectedCategories: async (categories, user_id) => {
      var requestOptions = {
        method: "PUT",
        // redirect: "follow",
        // mode: "cors",
        headers: { "Content-type": "application/json" },

        body: JSON.stringify({
          categories: categories,
          user_id: user_id,
        }),
      };

      fetch(process.env.BACKEND_URL + "/api/userCategory", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log("then!!!!", result);
          let selectedCategories = get().selectedCategories;
          let enterSelectedCategories = [...selectedCategories, ...result];
          set({
            selectedCategories: enterSelectedCategories,
          });
        });
    },

    // getSelectedCategories: (id) => {
    //   var requestOptions = {
    //     method: "GET",
    //     redirect: "follow",
    //     mode: "cors",
    //   };

    //   fetch(process.env.BACKEND_URL + `/api/user/${id}`, requestOptions)
    //     .then((response) => response.json())
    //     .then((result) => {
    //       set({
    //         selectedCategories: result.categories,
    //       });
    //     });
    // },

    getTodos: (id) => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        mode: "cors",
      };

      fetch(process.env.BACKEND_URL + `/api/todos/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          print("result!!!!!!!!!!!!1", result);
          set({
            todos: result,
          });
        });
    },

    addTodos: (label, user_id) => {
      var requestOptions = {
        method: "POST",
        // redirect: "follow",
        // mode: "cors",
        headers: { "Content-type": "application/json" },

        body: JSON.stringify({
          label: label,
          user_id: user_id,
          task_done: false,
        }),
      };

      fetch(process.env.BACKEND_URL + "/api/todos", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log("then!!!!", result);
          let todos = get().todos;
          let enterTodo = [...todos, result];
          set({
            todos: enterTodo,
          });
        });
    },

    getBuddy: (category_id) => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        mode: "cors",
      };

      fetch(
        process.env.BACKEND_URL + `/api/buddy/${category_id}`,
        requestOptions
      )
        // fetch(
        //   "https://3001-avokeys-buddyapp-4rimlyd8qp6.ws-us41.gitpod.io/api/categories",
        //   requestOptions
        // )
        .then((response) => response.json())
        .then((result) => {
          let info = get().user;

          let final = result.filter((item) => info.user.id !== item.id);
          set({
            buddy: final,
          });
        });
    },
    deleteTodos: (todoId) => {
      var requestOptions = {
        method: "DELETE",
        // redirect: "follow",
        // mode: "cors",
        headers: { "Content-type": "application/json" },
      };

      fetch(process.env.BACKEND_URL + `/api/todos/${todoId}`, requestOptions);
    },
  },
}));

export default useStore;
