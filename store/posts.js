export const state = () => ({
  posts: [],
})

export const getters = {
  getPosts: (state) => state.posts,
}

export const mutations = {
  SET_POSTS(state, payload) {
    state.posts = payload
  },
  SET_LIKE(state, payload) {
    const getIndex = state.posts.findIndex((post) => post.id === payload.id)
    state.posts[getIndex].like = payload.like
  },
  SET_VIEWER(state, postId) {
    const getIndex = state.posts.findIndex((post) => post.id === postId)
    state.posts[getIndex].viewer += 1
  },
}

export const actions = {}
