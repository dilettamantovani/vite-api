<script>
import axios from 'axios';
import { store } from './store.js'

import AppSearchEvent from './components/AppSearchEvent.vue'
import BreweryCard from './components/BreweryCard.vue';

export default {
  components: {
    BreweryCard,
    AppSearchEvent
  },

  data() {
    return {
      store,
    }
  },

  mounted() {
    this.breweriesList();
  },

  methods: {
    breweriesList() {
      let address = this.store.breweriesAPI;

      if (this.store.searchString.length) {
        address += `=${this.store.searchString.toUpperCase()}`;
      }

      console.log('Get: ', address);

      axios.get(address).then(result => {
        this.store.breweries = result.data;
      }).catch(error => {
        this.store.breweries = [];
        console.error('Something went wrong')
      });
    }
  }
}

</script>

<template>
  <main>
    <h1>Scotland's Best Breweries</h1>
    <AppSearchEvent @search="breweriesList" />
    <div id="wrapper">
      <BreweryCard v-for="brewery in store.breweries" :brewery="brewery" />
    </div>
    <!-- <p v-if="store.breweries.length == 0">No results</p> -->
  </main>
</template>

<style scoped>
#wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: auto;
}

h1 {
  color: #B45309;
}
</style>
