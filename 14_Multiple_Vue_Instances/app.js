var one = new Vue({
  el: '#root-one',
  data: {
    title: 'Vue App One'
  },

  methods: {

  },
  computed: {
    greet: function() {
      return 'Hello from app one :)';
    }
  }
});

var two = new Vue({
  el: '#root-two',
  data: {
    title: 'Vue App Two'
  },

  methods: {
    changeTitle: function(){
      one.title = "Title Changed";
    }
  },
  computed: {
    greet: function() {
      return 'Yo dudes, this is app 2 speaking to ya :)';
    }
  }
});


two.title = "Changed from outside";
