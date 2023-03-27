<template>
  <posts-list :posts="posts" title="Mais lidos" />
</template>

<script>
export default {
  data() {
    return {
      posts: {},
    }
  },
  created() {
    const getPosts = JSON.parse(
      JSON.stringify(this.$store.getters['posts/getPosts'])
    )
    this.posts = getPosts.sort((a, b) => b.viewer - a.viewer)
  },
}
</script>
