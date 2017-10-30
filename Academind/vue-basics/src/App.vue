<template>
<div id="app">
  <app-registration></app-registration>
  <app-registrations></app-registrations>
</div>
</template>

<script>
import Registration from './components/Registration.vue';
import Registrations from './components/Registrations.vue';
export default {
  name: 'app',
  components:{
    appRegistration: Registration,
    appRegistrations: Registrations
  }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

}
</style>
