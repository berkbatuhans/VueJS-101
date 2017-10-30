<script>
import Poster from './Poster.vue'
export default {
  name: 'Movie',
  props:{
    movie:{
      type: Object,
      required:true,
    }
  },
  computed:{
    movieDetailsPath(){
      return `/movie/${this.movie.id}`;
    }
  },
  components:{
    Poster,
  }
}
</script>

<template>

  <div class="card">
    <router-link :to="movieDetailsPath">
    <poster class="card-img-top" :posterName="movie.poster_path" :alt="movie.original_title" />
    <div class="card-block">
      <h4 class="card-title">{{movie.original_title}}</h4>
      <p class="card-text">{{movie.overview}}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Avarage Rating: {{movie.vote_average.toFixed(1)}}</small>
    </div>
    </router-link>
  </div>

</template>

<style >
.card {
  min-width: 250px;
  margin-bottom: 30px;
}
</style>
