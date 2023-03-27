<template>
  <v-row class="ma-0 mt-5" justify="center">
    <card-author
      v-for="user in userData"
      :id="user.id"
      :key="user.id"
      :name="user.name"
      :full-address="user.address"
      :email="user.email"
      :phone="user.phone"
      :website="user.website"
    />
  </v-row>
</template>

<script>
import CardAuthor from '~/components/cardAuthor.vue'
export default {
  components: { CardAuthor },
  data() {
    return {
      userData: {},
    }
  },
  created() {
    this.userData = this.$store.getters['users/getUsers']
  },
}
</script>

<style>
</style>
