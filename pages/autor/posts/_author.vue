<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <posts-list :posts="posts" :title="name" />
</template>

<script>
export default {
  data() {
    return {
      posts: {},
      name: '',
    }
  },
  created() {
    const { author } = this.$route.params
    const getPosts = this.$store.getters['posts/getPosts']
    this.posts = getPosts.filter((post) => post.userId === Number(author))
    this.name = this.posts[0].name
  },
}
</script>
