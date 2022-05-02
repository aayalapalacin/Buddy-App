import create from "zustand";
import { persist } from "zustand/middleware";
export const useAuth = create(
  persist(
    set => ({
      error: false,
      success: false,
      token: null,

      register: async (email, password) => {
        const response = await fetch(process.env.BACKEND_URL + '/register',
          {
            method: 'POST',

            headers:
            {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),

          });
        if (response.status === 204) {
          set({ success: true })
        } else {
          set({ error: true })
        }
      },
      login: async (email, password) => {
        const response = await fetch(process.env.BACKEND_URL + '/login',
          {
            method: 'POST',

            headers:
            {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),

          });
        if (response.status === 204) {
          set({ success: true })
        } else {
          set({ error: true })
        }
      }
    })
  )
);
const useStore = create((set, get) => ({
  categories: [],
  selectedCategories: [],
  goals: [],

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
  },
}));

export default useStore;
