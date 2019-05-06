// Common State.
const defaults = {
  title: '',
  layout: 'DefaultLayout',
  dialog: {
    visible: false,
    text: ''
  },
  snackbar: {
    visible: false,
    text: '',
    timeout: 6000,
    color: ''
  },
  error: {
    code: null,
    level: null,
    message: ''
  }
}

export default {
  namespaced: true,

  state: Object.assign({}, defaults),

  mutations: {
    updateTitle (state, title) {
      state.title = title
    },

    updateLayout (state, layout) {
      state.layout = layout
    },

    updateDialog (state, options) {
      state.dialog = Object.assign({}, defaults.dialog, options)
    },

    updateSnackbar (state, options) {
      state.snackbar = Object.assign({}, defaults.snackbar, options)
    },

    error (state, options) {
      state.error = Object.assign({}, defaults.error, options)
    },

    clear (state) {
      state = Object.assign({}, defaults)
    }
  },

  actions: {
    clear ({ state, commit, rootState, dispatch }) {
      commit('clear')
      dispatch('auth/clear', {}, { root: true })
    },
    updateTitle ({ commit }, title) {
      commit('updateTitle', title)
    },

    updateLayout ({ commit }, layout) {
      commit('updateLayout', layout)
    },

    updateDialog ({ commit }, options) {
      commit('updateDialog', options)
    },

    updateSnackbar ({ commit }, options) {
      commit('updateSnackbar', options)
    }
  }
}
