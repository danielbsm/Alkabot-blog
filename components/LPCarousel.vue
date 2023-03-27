<template>
  <v-carousel height="400" hide-delimiters>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="`carousel/${item.image}`"
      reverse-transition="fade-transition"
      transition="fade-transition"
      ><div class="carousel-text">{{ item.text }}</div></v-carousel-item
    >
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          image: 'apple_watch_series3.jpg',
          text: 'Queda de preços no Apple Watch Series 3!',
        },
        {
          image: 'car.jpg',
          text: 'Nissan GTR, modelo ganha novos acessórios.',
        },
        {
          image: 'life.png',
          text: '7 benefícios do yoga pra saúde.',
        },
        {
          image: 'work.jpg',
          text: 'Cresce o número de vagas para o setor de engenharia e T.I ',
        },
      ],
    }
  },
}
</script>
<style>
.v-responsive__content {
  display: flex;
  align-items: flex-end !important;
}
.carousel-text {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  opacity: 0.8;
  font-size: 1rem;
  color: #fff;
  padding: 5px;
  width: 100%;
}
</style>
