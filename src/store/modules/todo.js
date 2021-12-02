import moment from 'moment'

export const state = () => ({
  count: 0,
  list: []
})

export const getters = {
  todoList: state => state.list
}

export const actions = {
  async add ({ commit }, payload) {
    await commit('ADD', payload)
    commit('SORT')
  },
  edit () {

  },
  refresh ({ commit }) {
    commit('SORT')
  },
  async remove ({ commit }, payload) {
    commit('REMOVE', payload)
    commit('SORT')
  }
}

export const mutations = {
  SORT (state) {
    state.list.sort((a, b) => moment(b.date).diff(moment(a.date)))
  },
  ADD (state, { text }) {
    state.list.push({
      id: state.count,
      text,
      date: moment()
    })
    state.count++
  },
  EDIT () {

  },
  REMOVE (state, { id }) {
    state.list = [...state.list.filter(it => it.id !== id)]
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
