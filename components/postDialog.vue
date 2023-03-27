<template>
  <v-dialog v-model="dialog" max-width="800px" @click:outside="closeModal()">
    <v-card class="mx-auto" color="primary" dark>
      <div class="d-flex justify-end mr-2 pt-2">
        <v-icon size="20" dark @click="closeModal()">mdi-close</v-icon>
      </div>
      <v-card-title class="mb-5">
        <span class="text-h5 font-weight-bold">{{ postData.title }}</span>
      </v-card-title>

      <v-card-text class="text-body font-weight-bold">
        {{ postData.body }}
      </v-card-text>

      <v-card-actions class="px-6">
        <v-list-item class="grow pa-0">
          <v-list-item-avatar color="grey darken-3">
            <user-avatar
              :name="userData.name"
              :avatar-with-image="false"
              :size="40"
              :color-avatar="'grey darken-3'"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ userData.name }}</v-list-item-title>
          </v-list-item-content>

          <v-row align="center" justify="end">
            <v-btn
              class="mr-1"
              :color="like ? '#E53935' : ''"
              icon
              @click="updateLike(like)"
              ><v-icon> mdi-heart </v-icon></v-btn
            >
            <v-btn class="mr-1" icon
              ><v-icon> mdi-share-variant </v-icon></v-btn
            >
          </v-row>
        </v-list-item>
      </v-card-actions>
      <hr class="mx-6 black--text" />
      <div v-if="loadComments" class="d-flex flex-column mx-6 py-4">
        <v-skeleton-loader
          v-for="n in 3"
          :key="n"
          type="list-item-avatar, text"
        />
      </div>
      <post-comments v-else :comments="comments" class="mx-6" />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    postData: {
      type: Object,
      required: true,
    },
    userData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loadComments: false,
      user: {},
      comments: {},
    }
  },
  computed: {
    dialog() {
      return this.showModal
    },
    like() {
      const getPost = this.$store.getters['posts/getPosts'].find(
        (post) => post.id === this.postData.id
      )
      return getPost?.like
    },
  },
  watch: {
    postData() {
      this.getComments()
    },
  },
  methods: {
    closeModal() {
      this.$emit('update:showModal', false)
    },
    updateLike(postLike) {
      this.$store.commit('posts/SET_LIKE', {
        id: this.postData.id,
        like: !postLike,
      })
    },
    getComments() {
      this.loadComments = true
      setTimeout(async () => {
        await this.$alkabotApi
          .get(`/posts/${this.postData.id}/comments`)
          .then(({ data }) => {
            this.comments = data
          })
          .catch((error) => {
            this.$toast.error('Erro ao carregar comentários.')
            throw new Error(error)
          })
          .finally(() => {
            this.loadComments = false
          })
      }, 2000)
    },
  },
}
</script>
<style lang="scss" scoped>
::v-deep .theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar {
  background: transparent !important;
  padding: 0 !important;
  margin-bottom: 2px;
}
</style>
