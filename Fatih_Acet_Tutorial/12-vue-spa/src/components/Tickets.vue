<script>
export default {
  data() {
    return {}
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
}
</script>
<template>
  <div>
    <table>
      <tr v-for="ticket in ticketPrices">
        <td>{{ticket.label}}</td>
        <td>{{ticket.price}} TL</td>
        <td><select>
            <option value="">Adet</option>
            <option value="1">1</option>
            <option value="1">1</option>
            <option value="1">1</option>
        </select>
      </td>
      </tr>
    </table>
    </ul>
  </div>
</template>


<style lang="css">
</style>
