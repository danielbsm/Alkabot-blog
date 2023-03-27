export const state = () => ({
  loadingData: true,
  expireAt: null,
})

export const mutations = {
  UPDATE_LOADING_DATA(state, payload) {
    state.loadingData = payload
  },
  SET_EXPIRE_AT(state, payload) {
    state.expireAt = payload
  },
}

export const actions = {}
