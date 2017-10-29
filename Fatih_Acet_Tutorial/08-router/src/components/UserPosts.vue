<template>
  <div>
    <router-link :to="userLink">Back to user</router-link>
    <template v-for="post in posts">
      <h4>{{post.title}}</h4>
      <p>{{post.body}}</p>
      <hr>
    </template>
  </div>
</template>

<script>
export default {
  name: 'UserPosts',
  data() {
    return {
      posts: {}
    }
  },
  created(){
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.userId}`)
    .then((response) => { return response.json() })
    .then((data) => { this.posts = data; })
  },
  computed: {
    userLink(){
        return `/user/${this.$route.params.userId}`
    }
  }
}
</script>

<style>
</style>
