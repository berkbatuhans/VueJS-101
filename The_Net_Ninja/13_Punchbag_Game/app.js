new Vue({
  el: '#root',
  data:{
    healt: 100,
    ended: false
  },

  methods:{
    punch:function(){
      this.healt -= 10;
      //swal(String(this.healt))
      if (this.healt <= 0 ) {
        this.ended = true
        swal('Tebrikler Kum Torbası gücüne dayanamadı!')
      }
    },
    restart:function(){
      this.healt = 100;
      this.ended = false;
    }
  }
});
