<template>
  <option :value="optionValue" @selected="checkSelected">{{value}}</option>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    optionValue() {
      return this.value;
    }
  },
  methods:{
    checkSelected(){
      console.log('Selected Work.');
    },
  },
}
</script>

<style>
</style>
