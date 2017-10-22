var data = {
  name: ['Yoshi','Mario','Keloğlan']
}

Vue.component('greeting',{
  template: '<p>Hey there, I am a re-usable component {{name}} <button v-on:click="changeName">Change Name</button></p>',
  data:function(){
    return {
      name: data.name 
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
