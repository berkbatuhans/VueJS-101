<template>
  <img :src="posterPath" />
</template>

<script>
export default {
  props:{
    posterName: {
      type: String,
      required: true
    }
  },
  computed:{
    posterPath(){
      return `https://image.tmdb.org/t/p/w500/${this.posterName}`;
    }
  }
}
</script>

<style lang="css">
</style>
