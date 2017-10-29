<script>
import Loader from './Loader.vue';
import BackdropImage from './BackdropImage.vue';
import Poster from './Poster.vue';
export default {
  data(){
    return {
      hasDetails: false,
      isLoading: true,
    }
  },
  created(){
    this.$store.dispatch('fetchMovieDetails', this.movieId).then(() => {
      console.log('data fetched');
      this.isLoading = false;
      this.hasDetails = true;
    });
  },
  computed:{
    movieId(){
      return this.$route.params.id;
    },
    details(){
      return this.$store.state.movieDetails[this.movieId];
    },
  },
  components: {
    Loader,
    BackdropImage,
    Poster
  }
}
</script>

<template>
  <section>
    <loader v-if="isLoading" />
    <section v-if="hasDetails">
<poster :posterName="details.poster_path"></poster>
      <backdrop-image :imageName="details.backdrop_path"></backdrop-image>

    </section>
  </section>
</template>


<style>
</style>
