<script>
import axios from 'axios';
import { store } from './store.js'
import BreweryCard from './components/BreweryCard.vue';

export default {
  components: {
    BreweryCard
  },

  data() {
    return {
      store,
    }
  },

  mounted() {
    this.breweriesList();
    console.log(this.store)
  },

  methods: {
    breweriesList() {
      axios.get(this.store.breweriesAPI).then(result => {
        this.store.breweries = result.data;
      })
    }
  }
}

</script>

<template>
  <main>
    <h1>Scotland's Best Breweries</h1>
    <div id="wrapper">
      <BreweryCard v-for="brewery in store.breweries" :brewery="brewery" />
    </div>
  </main>
</template>

<style scoped>
#wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
