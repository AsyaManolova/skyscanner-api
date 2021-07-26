import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    places: [],
  },
  mutations: {
    setPlaces(state, data) {
      state.places = data.Places;
    },
  },
  actions: {
    async fetchPlaces(context) {
      const options = {
        method: 'GET',
        url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/BG/BGN/bg-BG/',
        params: { query: 'Sofia' },
        headers: {
          'x-rapidapi-key': '8ffda8ebcfmsh02d1c7aee3cbcf7p190403jsn80cacb5594c6',
          'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        },
      };

      axios.request(options).then((response) => {
        console.log(response.data);
        context.commit('setPlaces', response.data);
      }).catch((error) => {
        console.error(error);
      });
    },
  },
  getters: {
    getPlaces(state) {
      return state.places;
    },
  },
  modules: {
  },
});
