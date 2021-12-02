export const state = () => ({
  count: 0,
  list: []
})

export const getters = {
  todoList: state => state.list
}

export const actions = {
  add ({ commit }, payload) {
    commit('ADD', payload)
  },
  edit () {

  },
  remove ({ commit }, payload) {
    commit('REMOVE', payload)
  }
}

export const mutations = {
  ADD (state, { text }) {
    state.list.push({
      id: state.count,
      text,
      date: new Date()
    })
    state.count++
  },
  EDIT () {

  },
  REMOVE (state, { id }) {
    state.list = state.list.filter(it => it.id !== id)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
