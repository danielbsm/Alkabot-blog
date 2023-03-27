<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <posts-list :posts="posts" title="Últimos Posts" />
</template>

<script>
export default {
  data() {
    return {
      posts: {},
    }
  },
  created() {
    this.posts = JSON.parse(
      JSON.stringify(this.$store.getters['posts/getPosts'])
    )
  },
}
</script>
