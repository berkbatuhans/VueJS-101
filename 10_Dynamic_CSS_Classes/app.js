new Vue({
  el: '#root',
  data:{
    available: false,
    nearby: false
  },

  methods:{

  },
  computed:{
    compClasses: function(){
      return{
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});
