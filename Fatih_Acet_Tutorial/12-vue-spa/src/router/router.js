import Home from '../components/Home.vue';
import MovieDetails from '../components/MovieDetails.vue';
import Halls from '../components/Halls.vue';
import Tickets from '../components/Tickets.vue';
export default{
    routes:[
      {
        path: '/',
        component: Home,
      },
      {
        path: '/movie/:id',
        component: MovieDetails,
      },
      {
        path: '/movie/:id/tickets',
        component: Tickets,
      },
      {
        path: '/movie/:id/halls',
        component: Halls,
      },
    ],
    mode: 'history'
}
