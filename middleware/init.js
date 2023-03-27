export default async function ({ store, $alkabotApi, $toast }) {
  const postStructure = (posts, users) => {
    const itensStructured = posts.map((post) => {
      const userData = users.find((user) => user.id === post.userId)
      return {
        name: userData.name,
        action: '15 min',
        company: userData?.company?.name,
        body: post.body,
        title: post.title,
        id: post.id,
        userId: post.userId,
        like: false,
        viewer: 0,
      }
    })
    return itensStructured
  }
  const timeNow = new Date().getTime() / 1000
  if (
    !store.state.alkabotCore.loadingData ||
    store.state.alkabotCore.expireAt < timeNow
  ) {
    const getUsers = $alkabotApi.get('/users')
    const getPosts = $alkabotApi.get('/posts')
    await Promise.all([getUsers, getPosts])
      .then(([resUsers, resPosts]) => {
        store.commit('users/SET_USERS', resUsers.data)
        store.commit(
          'posts/SET_POSTS',
          postStructure(resPosts.data, resUsers.data)
        )
        store.commit('alkabotCore/UPDATE_LOADING_DATA', true)
        store.commit('alkabotCore/SET_EXPIRE_AT', timeNow + 3000)
      })
      .catch((error) => {
        $toast.error('Erro ao realizar a solicitação, tente novamente.')
        throw new Error(error)
      })
  }
}
