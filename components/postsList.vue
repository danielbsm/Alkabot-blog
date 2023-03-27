<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <v-layout column>
    <v-row class="ma-0 mt-5" justify="center">
      <h2>{{ title }}</h2>
    </v-row>
    <v-card outlined>
      <v-skeleton-loader v-if="loadingPosts" type="row@5" :types="types" />
      <v-list class="pa-0" two-line>
        <v-list-item-group v-model="selected" active-class="primary--text">
          <template v-for="(item, index) in items">
            <v-list-item :key="item.title" @click="showModalPost(item)">
              <v-list-item-content>
                <v-list-item-title class="white--text">{{
                  item.title
                }}</v-list-item-title>

                <v-list-item-subtitle>{{ item.company }}</v-list-item-subtitle>

                <v-list-item-subtitle>{{ item.body }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text>
                  <v-col class="pa-0">
                    <v-row class="ma-0 justify-center">{{ item.action }}</v-row>
                    <v-row class="ma-0 justify-center">
                      <user-avatar
                        :name="item.name"
                        :size="32"
                        :color-avatar="'primary'"
                        :avatar-with-image="false"
                      />
                    </v-row>
                  </v-col>
                </v-list-item-action-text>
              </v-list-item-action>
            </v-list-item>
            <v-divider v-if="index < items.length - 1" :key="index" />
          </template>
        </v-list-item-group>
      </v-list>
      <v-col v-if="showViewMore" class="pa-0" align-self="center">
        <v-divider />
        <div
          v-if="!loading && !loadingPosts"
          class="d-flex justify-center pa-1 format-link"
        >
          <v-btn text @click="viewMore"
            >Ver mais <v-icon right> mdi-chevron-double-down </v-icon></v-btn
          >
        </div>
        <div v-if="loading && !loadingPosts" class="d-flex justify-center py-1">
          <v-progress-circular indeterminate color="primary" size="22" />
        </div>
      </v-col>
    </v-card>
    <post-dialog
      :show-modal.sync="showModal"
      :post-data="postSelected"
      :user-data="userData"
    />
  </v-layout>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loadingPosts: true,
      showModal: false,
      loading: false,
      selected: [],
      postSelected: {},
      userData: {},
      allItems: [],
      items: [],
      numberItemsAdd: 5,
      types: {
        row: 'list-item-avatar-three-line',
      },
    }
  },
  computed: {
    showViewMore() {
      return this.allItems.length > 0
    },
  },
  created() {
    this.allItems = this.posts
    this.viewMore()
    setTimeout(() => {
      this.loadingPosts = false
    }, 2000)
  },
  methods: {
    showModalPost(item) {
      const user = this.$store.getters['users/getUsers'].find(
        (user) => user.id === item.userId
      )

      this.showModal = true
      this.userData = user
      this.postSelected = item
      this.$store.commit('posts/SET_VIEWER', item.id)
    },
    viewMore() {
      this.loading = true
      setTimeout(() => {
        const amountItems =
          this.allItems.length < this.numberItemsAdd
            ? this.allItems.length
            : this.numberItemsAdd
        if (amountItems > 0) {
          const newItens = []
          for (let i = 0; i < amountItems; i++) {
            newItens.push(this.allItems[i])
          }
          this.items.push(...newItens)
          this.removeItemAllList(newItens)
        }
        this.loading = false
      }, 2000)
    },
    removeItemAllList(items) {
      items.forEach((element) => {
        const indexItem = this.allItems.findIndex(
          (item) => item.id === element.id
        )
        this.allItems.splice(indexItem, 1)
      })
    },
  },
}
</script>
<style lang="scss">
.v-skeleton-loader__list-item-avatar-three-line {
  flex-direction: row-reverse !important;
}
.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar {
  align-self: flex-end;
  margin-right: 0 !important;
  margin-left: 10px;
}
.v-skeleton-loader__paragraph .v-skeleton-loader__text:nth-child(1) {
  max-width: 80%;
}
.v-skeleton-loader__paragraph .v-skeleton-loader__text:nth-child(3) {
  max-width: 100%;
}
</style>
