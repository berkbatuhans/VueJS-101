new Vue({
  el: '#vmodel',
  data:{
    message: 'Hello World',
    selectedVal: 'foo',
    isSelected: true
  },

  methods:{
    log(){
      console.log(`"${this.message}"`)
    },
    setValue(){
      this.message= 'World World'
      this.selectedVal = 'baz'
      this.isSelected = false
    }
  },
  computed:{

  }
});

setTimeout(() => {
  new Vue({
    el: '#vcloak',
    data:{
      users: [ { name:'Berk '},  {name: 'Ayşe'}]
    }
  });

},3000)

Vue.component('v-select',{
  template: `
  <select>
    <slot></slot>
  </select>
  `
})

Vue.component('v-option',{
  props: ['value'],
  template: `
  <option>{{value}}</option>
  `
})

new Vue({
  el: '#slots'
})

new Vue({
  el: '#nextTick',
  data:{
    message: 'Hello'
  },
  methods: {
    change(){
      this.message = 'Hello World';
console.log(document.querySelector('#nextTick').innerText);
      this.$nextTick(() =>{
        console.log(document.querySelector('#nextTick').innerText);
      })
    }
  }
})

new Vue({
  el: '#modifiers',
  methods:{
    log(e){
      e.preventDefault();
      console.log('Fooooo')
    }
  }
})
