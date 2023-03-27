<template>
  <v-layout column>
    <v-row class="my-1 mx-0 text-caption"
      ><a @click="showMore()">Ver 2 comentários anteriores</a></v-row
    >
    <v-row v-for="comment in comments" :key="comment.id" class="ma-0 my-1">
      <v-col cols="12" class="pa-0 align-center">
        <v-row class="ma-0 align-center">
          <v-col cols="auto" class="pa-0 mr-2"
            ><user-avatar
              :name="comment.name"
              :size="28"
              :color-avatar="'white'"
              :color-text="'black'"
              :avatar-with-image="false"
          /></v-col>
          <v-col
            cols="10"
            class="pa-0 text-truncate black--text font-weight-bold text-overline"
            >{{ comment.name }}</v-col
          >
        </v-row>
      </v-col>
      <p class="text-caption mb-1">{{ comment.body }}</p>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
  methods: {
    showMore() {
      alert('teste')
    },
  },
}
</script>
<style lang="scss" scoped>
.v-application a {
  &:hover {
    text-decoration: underline !important;
    color: #fff !important;
  }
}
</style>
