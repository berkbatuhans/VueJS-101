new Vue({
  el: '#root',
  data:{
    name: '',
    age: ''
  },

  methods:{
    logName: function(){
      console.log('You entered your name')
    },
    logAge: function(){
      console.log('You entered your age')
    }
  }
});
