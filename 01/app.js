new Vue({
  el: '#root',
  data:{
    message: 'Hello Vue',
    name: 'Berk Batuhan ŞAKAR',
    job: 'Software Developer',
    website: 'https://www.github.com/berkbatuhans',
    websiteTag: '<a href="https://www.github.com/berkbatuhans">Github Link </a>'
  },

  methods:{
    greet:function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
