<template>
  <div>
    <a @click="goBack">Go back to User List</a>
    <h1>Hello {{userData.name}}</h1>
    <ul>
      <li>{{userData.phone}}</li>
      <li>{{userData.website}}</li>
      <li>{{userData.email}}</li>
    </ul>
    <router-link :to="postsLink">Posts</router-link>
    <router-link :to="nextUserLink">Next User</router-link>

  </div>
</template>

<script>
export default {
  name:'UserProfile',
  data() {
    return {
      userData: {}
    }
  },
  methods:{
    fetchData(){
      fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
      .then((response) => { return response.json() })
      .then((data) => { this.userData = data; })
    },
    goBack(){
      /*
        Yöntem 1
        this.$router.push('/')

        Yöntem 2
        Aşağıdaki şekildeki kullanım sayfa refresh edilince yada yeniden açılınca
        tarayıcıdaki bir önceki sayfaya gitmekte.
        Push olarak bırakmak en doğrusu.
        this.$router.go('-1')

        Yöntem 3
        main.js içinde routes 'e name vermek.
        name verilmez ise aşağıdaki kullanım proje ilerledikçe problemle
        karşılaşmamızı sağlar
        this.$router.push('/user')

        Yöntem 4:
        this.$router.push({name: 'home'})
        parametre göndererek
        this.$router.push({name: 'userProfile', params:{ id: 9 }})
      */
      this.$router.push({name: 'home'})
    }
  },
  created(){
    this.fetchData();
  },
  watch : {
    '$route': 'fetchData'
  },
  computed: {
    postsLink(){
      return `/user/${this.$route.params.id}/posts`
    },
    nextUserLink(){
      return `/user/${parseInt(this.$route.params.id,10) + 1}`
    }
  }
}
</script>

<style lang="css">
</style>
