<script>
import VSelect from './HelperComponents/Select.vue';
import VOption from './HelperComponents/Option.vue';
export default {
  data() {
    return {
      totalPrice: 0,
    }
  },
  computed:{
    ticketPrices(){
      return this.$store.state.ticketPrices;
    }
  },
  created() {
    this.$store.dispatch('fetchTicketPrices').then(() => {
      console.log('data fetched');
      this.isLoading = false;
      this.hasDetails = true;
    });
  },
  components:{
    VSelect,
    VOption,
  },
  methods:{
    onChange (event) {
      console.log(event.target.value)
      console.log("seçildi.")
      //this.$emit('totalPrice',selected)
    }
  }
}
</script>
<template>
  <div>
    <table>
      <tr v-for="ticket in ticketPrices">
        <td>{{ticket.label}}</td>
        <td>{{ticket.price}} TL</td>
        <td>
        <v-select>
          <v-option value="Adet"></v-option>
          <v-option v-for="n in 10" :value="n" :key="n"></v-option>
        </v-select>
      </td>
      <td>
        {{ticket.price}}
      </td>
      </tr>
    </table>
    </ul>
  </div>
</template>


<style lang="css">
</style>
