import { Module } from 'vuex'
import * as g from '@/appdef'
export interface Phone {
  phoneType: string;
  phoneNumber: string;
}
export interface Email {
  emailType: string;
  email: string;
}
export interface User {
  name: string;
  phone: Phone;
  email: Email;
}
export interface UserState {
  user: User;
  selectedShape: string;
}

const userStore: Module<UserState, {}> = {
  state: {
    user: g.defaultUser,
    selectedShape: ''
  },
  mutations: {
    saveUser(state, user) {
      state.user = user
    },
    saveSelectedShape(state, selectedShape) {
      state.selectedShape=selectedShape
    }
  },
  actions: {
    saveUser({ commit }, user) {
      commit('saveUser', user)
    },
    saveSelectedShape({ commit }, selectedShape) {
      commit('saveSelectedShape', selectedShape)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    selectedShape (state) {
      return state.selectedShape
    }
  }
}
export default userStore