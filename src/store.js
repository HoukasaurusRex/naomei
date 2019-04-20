import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    voices: []
  },
  getters: {
    getVoices(state) {
      return state.voices;
    }
  },
  mutations: {
    UPDATE_VOICES(state, data) {
      state.voices = data;
    }
  },
  actions: {
    getVoices({ commit }) {
      const voices = speechSynthesis.getVoices();
      commit("UPDATE_VOICES", voices);
    }
  }
});
