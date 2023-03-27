export const state = () => ({
  users: [],
})

export const getters = {
  getUsers: (state) => state.users,
}

export const mutations = {
  SET_USERS(state, payload) {
    state.users = payload
  },
}

export const actions = {}
