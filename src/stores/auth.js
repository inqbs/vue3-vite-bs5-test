import { defineStore } from 'pinia'

import dayjs from 'dayjs'
import AES from 'crypto-js/aes'
import encUtf8 from 'crypto-js/enc-utf8'

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

      this.accessTime = dayjs()
      this.username = username
      this.token = generateToken(username, password)
    },
    //  when access that user logged in a few hour
    parseInfo () {
      const token = this.token

      //  get username from token
      const username = AES.decrypt(token, enckey).toString(encUtf8).split('-')?.[0]

      this.username = username
      this.accessTime = dayjs()
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
