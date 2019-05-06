// Common State.
const defaults = {
  classSidebar: '',
  classMobile: {
    opened: '',
    slideNav: '',
    opendOverflow:''
  }
}

export default {
  state: Object.assign({}, defaults),

  mutations: {
    updateSidebar(state, options) {
      state.classSidebar = options
    },
    updateClassMobile(state, options) {
      state.classMobile = Object.assign({}, defaults.classMobile, options)
    }
  },

  actions: {
    UPDATE_SIDEBAR({ commit }, options) {
      commit('updateSidebar', options)
    },
    UPDATE_CLASS_MOBILE({ commit }, options) {
      commit('updateClassMobile', options)
    },
  }
}
