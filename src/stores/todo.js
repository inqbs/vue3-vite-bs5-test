import { defineStore } from 'pinia'
import dayjs from 'dayjs'

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
      this.list.sort((a, b) => dayjs(b.date).diff(dayjs(a.date)))
    },
    add ({ text }) {
      this.list.push({
        id: this.count,
        text,
        date: dayjs()
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
