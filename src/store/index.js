import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import TodoStore from '@/store/modules/todo.js'

export default createStore({
  modules: {
    TodoStore
  },
  plugins: [createPersistedState()]
})
