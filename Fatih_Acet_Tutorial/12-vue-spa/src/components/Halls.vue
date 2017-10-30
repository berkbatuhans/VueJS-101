<script>
export default {
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('fetchHalls').then(() => {
      console.log('fetchHalls fetched')
    });
  },
  computed: {
    halls() {
      return this.$store.state.halls;
    }
  },
}
</script>

<template>
<div>
  <template v-for="(key,hall) in halls">
    <div id="seat-data-placerholder">
        <div class="seating__seats nxm-data-binder-count" data-allocated-seat-count="1">
            <div class="seating__seats__screen"><span>Perde</span></div>
            <div class="seating__seats__table-before">
                <div class="seating__seats__table-container">
                    <table class="seating__seats__table">
                        <tbody>
                                    <tr v-for="(seating,value) in key.seating">

                                            <th class="seat-letter"><div>{{value}}</div></th>
                                                                  <td v-for="seat in seating">
                                                                    <div class="seat" data-cc="0000000001" data-a="1" data-c="12" data-r="10">{{seat}}</div>
                                                                  </td>
                                            <th class="seat-letter"><div>{{value}}</div></th>

                                    </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </template>
</div>
</template>


<style lang="css">
</style>
