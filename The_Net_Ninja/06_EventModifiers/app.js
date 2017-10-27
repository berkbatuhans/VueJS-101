new Vue({
  el: '#root',
  data:{
    deger: ''
  },
  methods: {
    click:function(){
      alert('Önce Clickledin.')
    },
    enter:function(){
      alert(this.deger + ' tetiklendi.')
    }
  }
});
