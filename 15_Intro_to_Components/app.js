Vue.component('greeting',{
  template: '<p>Hey there, I am a re-usable component {{name}}</p>',
  data:function(){
    return {
      name: 'Yoshi'
    }
  },
  methods:{
    changeName:function(){
      this.name = 'Mario';
    }
  }
})

new Vue({
  el: '#root-one',
});

new Vue({
  el: '#root-two',
});
