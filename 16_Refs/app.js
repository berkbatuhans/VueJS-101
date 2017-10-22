new Vue({
  el: '#root',
  data:{
    output: 'Your fav food'
  },
  methods:{
    readRefs: function(){
      //console.log(this.$refs.input.value);
      this.output = this.$refs.input.value;
      console.log(this.$refs.divref.innerText)
    }
  },
  computed:{

  }
});
