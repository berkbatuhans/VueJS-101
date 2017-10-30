import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    registrations: [],
    users:[
        {id: 1, name: 'Max', registered: false},
        {id: 2, name: 'Anna', registered: false},
        {id: 3, name: 'Chris', registered: false},
        {id: 4, name: 'Sven', registered: false},
    ]
};
const getters = {
  unregisteredUser(state){
    return state.users.filter(user => {
      return !user.registered;
    })
  },
    registrations(state){
        return state.registrations;
    },
    totalRegistrations(state){
        return state.registrations.length;
    }

};
const mutations ={
    register(state, userId){
        const date = new Date;
        const user = state.users.find(user=> {
            return user.id == userId;
        });
        user.registered = true;
        const registration = {
          userId: userId,
            name: user.name,
            date: date.getMonth() + '/' + date.getDay()
        };
        state.registrations.push(registration);
    },
    unregister(state, userId){
        const user = state.users.find(user=> {
            return user.id == ;
        });
        user.registered = false;
        const registration = state.registrations.findIndex(registration => {
            registration.userId == userId;
        });
        this.registrations.splice(state.registrations.indexOf(registration),1);
    }
};
const actions ={};
export const store = new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
});
