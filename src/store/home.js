export default {
  state: {
    cardNumber: null,
    cardName: null,
    cardValidate: null,
    cardSecurity: null,
  },

  mutations: {
    updateForm(state, param) {
      state[param.key] = param.value
    },
    clearForm(state) {
      state.cardNumber = ''
      state.cardName = ''
      state.cardValidate = ''
      state.cardSecurity = ''
    },
  },

  actions: {
    updateForm(context, param) {
      context.commit('updateForm', param)
    },
    clearForm(context) {
      context.commit('clearForm')
    },
  },

  getters: {
    cardNumber: state => {
      return state.cardNumber
    },

    cardName: state => {
      return state.cardName
    },

    cardValidate: state => {
      return state.cardValidate
    },

    cardSecurity: state => {
      return state.cardSecurity
    },
  }
}