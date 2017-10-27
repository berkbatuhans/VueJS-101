new Vue({
  el: '#root',
  data:{
    characters: ['Mario','Luigi','Yoshi','Bowser'],
    ninjas:[
      {
        name:'Ryu',
        age:25,
        image:
          {
            url:'images/ryu_hayabusa.png',
            width: '250px',
            height: '250px'
          }

      },
      {
        name:'Yoshi',
        age:35,
        image:
        {
          url:'images/Yoshi.png',
          width: '250px',
          height: '250px'
        }
      },
      {
        name:'Mario',
        age:45,
        image:
        {
          url:'images/mario.png',
          width: '250px',
          height: '250px'
        }
      }
      ]


  },

  methods:{

  },
  computed:{

  }
});
