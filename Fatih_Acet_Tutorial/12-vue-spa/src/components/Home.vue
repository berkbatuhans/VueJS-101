<script>
import { mapGetters } from 'vuex';
import AppHeader from './AppHeader.vue';
import Loader from './Loader.vue';
import Movie from './Movie.vue'
export default {
  name: 'Home',
  data(){
    return {
      isLoading: true
    }
  },
  components:{
    AppHeader,
    Loader,
    Movie,
  },
  computed:{
    ...mapGetters([
      'movies'
  ])
  },
  created(){
    this.$store.dispatch('fetchMovies').then(() => {
      this.isLoading = false;
    });
  }
}
</script>
<template>

  <section>

  <app-header />
  <loader v-if="isLoading" />
  <movie v-for="movie in movies" key="movie.id"/>
  </section>
</template>


<style>
</style>
