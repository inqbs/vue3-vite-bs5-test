import { defineStore } from 'pinia'

import moment from 'moment'
import { AES, enc } from 'crypto-js'

//  get enckey from .env.local
const enckey = import.meta.env.VITE_ENCKEY

//  generate dummy token
const generateToken = (username, password) => {
  const dummySalt = Math.floor(Math.random() * 16)
  return AES.encrypt(`${username}-${dummySalt}-${password}`, enckey).toString()
}

export const useAuthStore = defineStore('AuthStore', {
  state: () => ({
    username: '',
    token: '',
    accessTime: null
  }),
  getters: {
    //  loggedIn but no info in store
    isParseInfoRequired: state => !state.username && !!state.token,

    //  loggedIn
    isLoggedIn: state => !!state.token
  },
  actions: {
    //  when first access and login
    login ({ username, password }) {
      if (!username || !password) return

      this.accessTime = moment()
      this.username = username
      this.token = generateToken(username, password)
    },
    //  when access that user logged in a few hour
    parseInfo () {
      const token = this.token

      //  get username from token
      const username = AES.decrypt(token, enckey).toString(enc.Utf8).split('-')?.[0]

      this.username = username
      this.accessTime = moment()
    },
    logout () {
      this.$reset()
    }
  },

  persist: {
    key: 'token',
    storage: window.localStorage,
    paths: ['token'],
    overwrite: true
  }
})
