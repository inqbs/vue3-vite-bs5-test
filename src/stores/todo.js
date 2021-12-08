import { defineStore } from 'pinia'
import moment from 'moment'

export const useTodoStore = defineStore('TodoStore', {
  state: () => ({
    count: 0,
    list: []
  }),
  getters: {
    todoLength: state => state.list.length
  },
  actions: {
    sort () {
      this.list.sort((a, b) => moment(b.date).diff(moment(a.date)))
    },
    add ({ text }) {
      this.list.push({
        id: this.count,
        text,
        date: moment()
      })
      this.count++
      this.sort()
    },
    remove ({ id }) {
      this.list = [...this.list.filter(it => it.id !== id)]
      this.sort()
    },
    clear () {
      this.$reset()
    }
  }

})
