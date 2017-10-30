<template>
  <select v-model="selected" @change.prevent="onChange" key=key>
    <slot></slot>
  </select>
</template>

<script>
export default {
  data(){
    return{ selected: 0 }
  },
  methods:{
    onChange(event) {

      console.log(event.target.value)
      console.log(  "seçildi.")
      //this.$emit('totalPrice',selected)
    }
  }
}
</script>

<style>
</style>
